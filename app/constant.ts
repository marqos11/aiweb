export const OWNER = "ChatGPTNextWeb";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const PLUGINS_REPO_URL = `https://github.com/${OWNER}/NextChat-Awesome-Plugins`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const STABILITY_BASE_URL = "https://api.stability.ai";
export const OPENAI_BASE_URL = "https://api.openai.com";
export const ANTHROPIC_BASE_URL = "https://api.anthropic.com";
export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";
export const BAIDU_BASE_URL = "https://aip.baidubce.com";
export const BAIDU_OATUH_URL = `${BAIDU_BASE_URL}/oauth/2.0/token`;
export const BYTEDANCE_BASE_URL = "https://ark.cn-beijing.volces.com";
export const ALIBABA_BASE_URL = "https://dashscope.aliyuncs.com/api/";
export const TENCENT_BASE_URL = "https://hunyuan.tencentcloudapi.com";
export const MOONSHOT_BASE_URL = "https://api.moonshot.ai";
export const IFLYTEK_BASE_URL = "https://spark-api-open.xf-yun.com";
export const DEEPSEEK_BASE_URL = "https://api.deepseek.com";
export const XAI_BASE_URL = "https://api.x.ai";
export const CHATGLM_BASE_URL = "https://open.bigmodel.cn";
export const SILICONFLOW_BASE_URL = "https://api.siliconflow.cn";
export const AI302_BASE_URL = "https://api.302.ai";

export const CACHE_URL_PREFIX = "/api/cache";
export const UPLOAD_URL = `${CACHE_URL_PREFIX}/upload`;

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Plugins = "/plugins",
  Auth = "/auth",
  Sd = "/sd",
  SdNew = "/sd-new",
  Artifacts = "/artifacts",
  SearchChat = "/search-chat",
  McpMarket = "/mcp-market",
}

export enum ApiPath {
  Cors = "",
  OpenAI = "/api/openai",
  Anthropic = "/api/anthropic",
  Google = "/api/google",
  Baidu = "/api/baidu",
  ByteDance = "/api/bytedance",
  Alibaba = "/api/alibaba",
  Tencent = "/api/tencent",
  Moonshot = "/api/moonshot",
  Iflytek = "/api/iflytek",
  Stability = "/api/stability",
  Artifacts = "/api/artifacts",
  XAI = "/api/xai",
  ChatGLM = "/api/chatglm",
  DeepSeek = "/api/deepseek",
  SiliconFlow = "/api/siliconflow",
  "302.AI" = "/api/302ai",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Plugin = "chat-next-web-plugin",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
  SdList = "sd-list",
  Mcp = "mcp-store",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;
export const ACCESS_CODE_PREFIX = "nk-";
export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;
export const STORAGE_KEY = "chatgpt-next-web";
export const REQUEST_TIMEOUT_MS = 60000;
export const REQUEST_TIMEOUT_MS_FOR_THINKING = REQUEST_TIMEOUT_MS * 5;
export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Google = "Google",
  Anthropic = "Anthropic",
  Baidu = "Baidu",
  ByteDance = "ByteDance",
  Alibaba = "Alibaba",
  Tencent = "Tencent",
  Moonshot = "Moonshot",
  Stability = "Stability",
  Iflytek = "Iflytek",
  XAI = "XAI",
  ChatGLM = "ChatGLM",
  DeepSeek = "DeepSeek",
  SiliconFlow = "SiliconFlow",
  "302.AI" = "302.AI",
}

export enum GoogleSafetySettingsThreshold {
  BLOCK_NONE = "BLOCK_NONE",
  BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH",
  BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE",
  BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE",
}

export enum ModelProvider {
  Stability = "Stability",
  GPT = "GPT",
  GeminiPro = "GeminiPro",
  Claude = "Claude",
  Ernie = "Ernie",
  Doubao = "Doubao",
  Qwen = "Qwen",
  Hunyuan = "Hunyuan",
  Moonshot = "Moonshot",
  Iflytek = "Iflytek",
  XAI = "XAI",
  ChatGLM = "ChatGLM",
  DeepSeek = "DeepSeek",
  SiliconFlow = "SiliconFlow",
  "302.AI" = "302.AI",
}

export const Stability = {
  GeneratePath: "v2beta/stable-image/generate",
  ExampleEndpoint: "https://api.stability.ai",
};

export const Anthropic = {
  ChatPath: "v1/messages",
  ChatPath1: "v1/complete",
  ExampleEndpoint: "https://api.anthropic.com",
  Vision: "2023-06-01",
};

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  SpeechPath: "v1/audio/speech",
  ImagePath: "v1/images/generations",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  ChatPath: (modelName: string) =>
    `v1beta/models/${modelName}:streamGenerateContent`,
};

export const Baidu = {
  ExampleEndpoint: BAIDU_BASE_URL,
  ChatPath: (modelName: string) => {
    let endpoint = modelName;
    if (modelName === "ernie-4.0-8k") endpoint = "completions_pro";
    if (modelName === "ernie-4.0-8k-preview-0518") endpoint = "completions_adv_pro";
    if (modelName === "ernie-3.5-8k") endpoint = "completions";
    if (modelName === "ernie-speed-8k") endpoint = "ernie_speed";
    return `rpc/2.0/ai_custom/v1/wenxinworkshop/chat/${endpoint}`;
  },
};

export const ByteDance = {
  ExampleEndpoint: "https://ark.cn-beijing.volces.com/api/",
  ChatPath: "api/v3/chat/completions",
};

export const Alibaba = {
  ExampleEndpoint: ALIBABA_BASE_URL,
  ChatPath: (modelName: string) => {
    if (modelName.includes("vl") || modelName.includes("omni")) {
      return "v1/services/aigc/multimodal-generation/generation";
    }
    return `v1/services/aigc/text-generation/generation`;
  },
};

export const Tencent = {
  ExampleEndpoint: TENCENT_BASE_URL,
};

export const Moonshot = {
  ExampleEndpoint: MOONSHOT_BASE_URL,
  ChatPath: "v1/chat/completions",
};

export const Iflytek = {
  ExampleEndpoint: IFLYTEK_BASE_URL,
  ChatPath: "v1/chat/completions",
};

export const DeepSeek = {
  ExampleEndpoint: DEEPSEEK_BASE_URL,
  ChatPath: "chat/completions",
};

export const XAI = {
  ExampleEndpoint: XAI_BASE_URL,
  ChatPath: "v1/chat/completions",
};

export const ChatGLM = {
  ExampleEndpoint: CHATGLM_BASE_URL,
  ChatPath: "api/paas/v4/chat/completions",
  ImagePath: "api/paas/v4/images/generations",
  VideoPath: "api/paas/v4/videos/generations",
};

export const SiliconFlow = {
  ExampleEndpoint: SILICONFLOW_BASE_URL,
  ChatPath: "v1/chat/completions",
  ListModelPath: "v1/models?&sub_type=chat",
};

export const AI302 = {
  ExampleEndpoint: AI302_BASE_URL,
  ChatPath: "v1/chat/completions",
  EmbeddingsPath: "jina/v1/embeddings",
  ListModelPath: "v1/models?llm=1",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`;
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by {{ServiceProvider}}.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: \\(x^2\\) 
Latex block: $$e=mc^2$$
`;

export const MCP_TOOLS_TEMPLATE = `
[clientId]
{{ clientId }}
[tools]
{{ tools }}
`;

export const MCP_SYSTEM_TEMPLATE = `
You are an AI assistant with access to system tools. Your role is to help users by combining natural language understanding with tool operations when needed.
`;

export const SUMMARIZE_MODEL = "gpt-4o-mini";
export const GEMINI_SUMMARIZE_MODEL = "gemini-pro";
export const DEEPSEEK_SUMMARIZE_MODEL = "deepseek-chat";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2024-06",
  "grok-4.1-expert": "2025-01",
  "grok-4.1-fast": "2025-01",
  "gemini-flash": "2023-12",
  "gpt-5.2": "2025-02",
};

export const DEFAULT_TTS_ENGINE = "OpenAI-TTS";
export const DEFAULT_TTS_ENGINES = ["OpenAI-TTS", "Edge-TTS"];
export const DEFAULT_TTS_MODEL = "tts-1";
export const DEFAULT_TTS_VOICE = "alloy";
export const DEFAULT_TTS_MODELS = ["tts-1", "tts-1-hd"];
export const DEFAULT_TTS_VOICES = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];

export const VISION_MODEL_REGEXES: RegExp[] = [
  /vision/,
  /gemini/,
  /grok/,
  /gpt-5/,
  /claude-.*-4/
];

export const EXCLUDE_VISION_MODEL_REGEXES: RegExp[] = [];

const openaiModels: string[] = [
  "gpt-5-nano",
  "gpt-5.2",
  "gpt-5.2-chat-latest",
  "grok-4.1-expert",
  "grok-4.1-fast",
  "grok-4.1-fast-reasoning",
  "grok-4.1-thinking"
];

const googleModels: string[] = [
  "gemini-3-flash-preview",
  "gemini-3-flash-puter",
  "gemini-3-pro-preview",
  "gemini-3.0-pro",
  "gemini-flash",
  "gemini-flash-latest"
];

const anthropicModels: string[] = [
  "claude-opus-4-5-20251101",
  "claude-opus-4.5",
  "claude-sonnet-4-5-20250929",
  "claude-sonnet-4.5"
];

const siliconflowModels: string[] = [
  "openrouter:x-ai/grok-4.1-fast"
];

let seq = 1000;
export const DEFAULT_MODELS = [
  ...openaiModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
      sorted: 1,
    },
  })),
  ...googleModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "google",
      providerName: "Google",
      providerType: "google",
      sorted: 3,
    },
  })),
  ...anthropicModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "anthropic",
      providerName: "Anthropic",
      providerType: "anthropic",
      sorted: 4,
    },
  })),
  ...siliconflowModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "siliconflow",
      providerName: "SiliconFlow",
      providerType: "siliconflow",
      sorted: 14,
    },
  })),
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

export const internalAllowedWebDavEndpoints = [
  "https://dav.jianguoyun.com/dav/",
  "https://dav.dropdav.com/",
  "https://dav.box.com/dav",
  "https://nanao.teracloud.jp/dav/",
  "https://bora.teracloud.jp/dav/",
  "https://webdav.4shared.com/",
  "https://dav.idrivesync.com",
  "https://webdav.yandex.com",
  "https://app.koofr.net/dav/Koofr",
];

export const DEFAULT_GA_ID = "G-89WN60ZK2E";
export const SAAS_CHAT_URL = "https://nextchat.club";
export const SAAS_CHAT_UTM_URL = "https://nextchat.club?utm=github";
