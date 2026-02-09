import md5 from "spark-md5";
import { DEFAULT_MODELS, DEFAULT_GA_ID } from "../constant";
import { isGPT4Model } from "../utils/model";

const ACCESS_CODES = (function getAccessCodes(): Set<string> {
  const code = process.env.CODE;
  try {
    const codes = (code?.split(",") ?? [])
      .filter((v) => !!v)
      .map((v) => md5.hash(v.trim()));
    return new Set(codes);
  } catch (e) {
    return new Set();
  }
})();

function getApiKey(keys?: string) {
  const apiKeyEnvVar = keys ?? "";
  const apiKeys = apiKeyEnvVar.split(",").map((v) => v.trim());
  const randomIndex = Math.floor(Math.random() * apiKeys.length);
  const apiKey = apiKeys[randomIndex];
  return apiKey;
}

export const getServerSideConfig = () => {
  if (typeof process === "undefined") {
    throw Error("[Server Config] nodejs-only module");
  }

  return {
    baseUrl: process.env.BASE_URL,
    apiKey: getApiKey(process.env.OPENAI_API_KEY),
    openaiOrgId: process.env.OPENAI_ORG_ID,

    isGoogle: !!process.env.GOOGLE_API_KEY,
    googleApiKey: getApiKey(process.env.GOOGLE_API_KEY),
    googleUrl: process.env.GOOGLE_URL,

    isAnthropic: !!process.env.ANTHROPIC_API_KEY,
    anthropicApiKey: getApiKey(process.env.ANTHROPIC_API_KEY),
    anthropicUrl: process.env.ANTHROPIC_URL,
    anthropicApiVersion: process.env.ANTHROPIC_API_VERSION,

    isBaidu: !!process.env.BAIDU_API_KEY,
    baiduApiKey: getApiKey(process.env.BAIDU_API_KEY),
    baiduUrl: process.env.BAIDU_URL,

    isBytedance: !!process.env.BYTEDANCE_API_KEY,
    bytedanceApiKey: getApiKey(process.env.BYTEDANCE_API_KEY),
    bytedanceUrl: process.env.BYTEDANCE_URL,

    isAlibaba: !!process.env.ALIBABA_API_KEY,
    alibabaApiKey: getApiKey(process.env.ALIBABA_API_KEY),
    alibabaUrl: process.env.ALIBABA_URL,

    isMoonshot: !!process.env.MOONSHOT_API_KEY,
    moonshotApiKey: getApiKey(process.env.MOONSHOT_API_KEY),
    moonshotUrl: process.env.MOONSHOT_URL,

    isDeepSeek: !!process.env.DEEPSEEK_API_KEY,
    deepseekApiKey: getApiKey(process.env.DEEPSEEK_API_KEY),
    deepseekUrl: process.env.DEEPSEEK_URL,

    isXAI: !!process.env.XAI_API_KEY,
    xaiApiKey: getApiKey(process.env.XAI_API_KEY),
    xaiUrl: process.env.XAI_URL,

    isChatGLM: !!process.env.CHATGLM_API_KEY,
    chatglmApiKey: getApiKey(process.env.CHATGLM_API_KEY),
    chatglmUrl: process.env.CHATGLM_URL,

    isSiliconFlow: !!process.env.SILICONFLOW_API_KEY,
    siliconFlowApiKey: getApiKey(process.env.SILICONFLOW_API_KEY),
    siliconFlowUrl: process.env.SILICONFLOW_URL,

    isAI302: !!process.env.AI302_API_KEY,
    ai302ApiKey: getApiKey(process.env.AI302_API_KEY),
    ai302Url: process.env.AI302_URL,

    cloudflareAccountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    cloudflareKVNamespaceId: process.env.CLOUDFLARE_KV_NAMESPACE_ID,
    cloudflareKVApiKey: getApiKey(process.env.CLOUDFLARE_KV_API_KEY),
    cloudflareKVTTL: process.env.CLOUDFLARE_KV_TTL,

    gaId: process.env.GA_ID || DEFAULT_GA_ID,
    customModels: process.env.CUSTOM_MODELS ?? "",
    defaultModel: process.env.DEFAULT_MODEL ?? "",
    visionModels: process.env.VISION_MODELS ?? "",
    hideUserApiKey: !!process.env.HIDE_USER_API_KEY,
    allowedWebDavEndpoints: (process.env.WHITE_WEBDAV_ENDPOINTS ?? "").split(","),
    enableMcp: process.env.ENABLE_MCP === "true",

    // AUTH PROPERTIES RESTORED
    needCode: ACCESS_CODES.size > 0,
    codes: ACCESS_CODES,
  };
};
