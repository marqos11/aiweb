"use client";
import {
  ApiPath,
  OPENAI_BASE_URL,
  DEFAULT_MODELS,
  OpenaiPath,
  REQUEST_TIMEOUT_MS,
  ServiceProvider,
} from "@/app/constant";
import {
  ChatMessageTool,
  useAccessStore,
  useAppConfig,
  useChatStore,
  usePluginStore,
} from "@/app/store";
import {
  preProcessImageContent,
  uploadImage,
  base64Image2Blob,
  streamWithThink,
} from "@/app/utils/chat";
import { cloudflareAIGatewayUrl } from "@/app/utils/cloudflare";
import { ModelSize, DalleQuality, DalleStyle } from "@/app/typing";
import {
  ChatOptions,
  getHeaders,
  LLMApi,
  LLMModel,
  LLMUsage,
  MultimodalContent,
  SpeechOptions,
} from "../api";
import Locale from "../../locales";
import { getClientConfig } from "@/app/config/client";
import {
  getMessageTextContent,
  isVisionModel,
  isDalle3 as _isDalle3,
  getTimeoutMSByModel,
} from "@/app/utils";
import { fetch } from "@/app/utils/stream";

export class ChatGPTApi implements LLMApi {
  private disableListModels = true;

  path(path: string): string {
    const accessStore = useAccessStore.getState();
    let baseUrl = "";

    if (accessStore.useCustomConfig) {
      baseUrl = accessStore.openaiUrl;
    }

    if (baseUrl.length === 0) {
      const isApp = !!getClientConfig()?.isApp;
      baseUrl = isApp ? OPENAI_BASE_URL : ApiPath.OpenAI;
    }

    if (baseUrl.endsWith("/")) {
      baseUrl = baseUrl.slice(0, baseUrl.length - 1);
    }
    if (!baseUrl.startsWith("http") && !baseUrl.startsWith(ApiPath.OpenAI)) {
      baseUrl = "https://" + baseUrl;
    }

    return cloudflareAIGatewayUrl([baseUrl, path].join("/"));
  }

  async extractMessage(res: any) {
    if (res.error) {
      return "```\n" + JSON.stringify(res, null, 4) + "\n```";
    }
    if (res.data) {
      let url = res.data?.at(0)?.url ?? "";
      const b64_json = res.data?.at(0)?.b64_json ?? "";
      if (!url && b64_json) {
        url = await uploadImage(base64Image2Blob(b64_json, "image/png"));
      }
      return [{ type: "image_url", image_url: { url } }];
    }
    return res.choices?.at(0)?.message?.content ?? res;
  }

  async chat(options: ChatOptions) {
    const modelConfig = {
      ...useAppConfig.getState().modelConfig,
      ...useChatStore.getState().currentSession().mask.modelConfig,
      ...{
        model: options.config.model,
        providerName: options.config.providerName,
      },
    };

    let requestPayload: any;
    const isDalle3 = _isDalle3(options.config.model);
    const isO1OrO3 = options.config.model.startsWith("o1") || options.config.model.startsWith("o3");
    const isGpt5 = options.config.model.startsWith("gpt-5");

    if (isDalle3) {
      const prompt = getMessageTextContent(options.messages.slice(-1)?.pop() as any);
      requestPayload = {
        model: options.config.model,
        prompt,
        response_format: "b64_json",
        n: 1,
        size: options.config?.size ?? "1024x1024",
      };
    } else {
      const visionModel = isVisionModel(options.config.model);
      const messages = options.messages.map(v => ({
        role: v.role,
        content: visionModel ? preProcessImageContent(v.content) : getMessageTextContent(v)
      }));

      requestPayload = {
        messages,
        stream: options.config.stream,
        model: modelConfig.model,
        temperature: (!isO1OrO3 && !isGpt5) ? modelConfig.temperature : 1,
      };

      if (isGpt5 || isO1OrO3) {
        requestPayload["max_completion_tokens"] = modelConfig.max_tokens;
      }
    }

    const chatPath = this.path(isDalle3 ? OpenaiPath.ImagePath : OpenaiPath.ChatPath);
    // ... (rest of stream/fetch implementation)
  }
  // ... (usage and models logic)
}
