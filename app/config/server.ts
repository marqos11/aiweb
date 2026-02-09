// aiweb-main/app/config/server.ts
import md5 from "spark-md5";
import { DEFAULT_MODELS, DEFAULT_GA_ID } from "../constant";
import { isGPT4Model } from "../utils/model";

// ... (keep ProcessEnv and ACCESS_CODES as they are)

export const getServerSideConfig = () => {
  if (typeof process === "undefined") {
    throw Error("[Server Config] nodejs-only module");
  }

  const disableGPT4 = !!process.env.DISABLE_GPT4;
  let customModels = process.env.CUSTOM_MODELS ?? "";
  let defaultModel = process.env.DEFAULT_MODEL ?? "";
  let visionModels = process.env.VISION_MODELS ?? "";

  const allowedWebDavEndpoints = (process.env.WHITE_WEBDAV_ENDPOINTS ?? "").split(",");

  return {
    baseUrl: process.env.BASE_URL,
    apiKey: getApiKey(process.env.OPENAI_API_KEY),
    openaiOrgId: process.env.OPENAI_ORG_ID,

    isGoogle: !!process.env.GOOGLE_API_KEY,
    googleApiKey: getApiKey(process.env.GOOGLE_API_KEY),
    
    isAnthropic: !!process.env.ANTHROPIC_API_KEY,
    anthropicApiKey: getApiKey(process.env.ANTHROPIC_API_KEY),

    // Azure properties removed from return object
    
    gaId: process.env.GA_ID || DEFAULT_GA_ID,
    customModels,
    defaultModel,
    visionModels,
    allowedWebDavEndpoints,
    hideUserApiKey: !!process.env.HIDE_USER_API_KEY,
  };
};
