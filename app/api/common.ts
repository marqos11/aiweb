import { NextRequest, NextResponse } from "next/server";
import { getServerSideConfig } from "../config/server";
import { OPENAI_BASE_URL, ServiceProvider } from "../constant";
import { cloudflareAIGatewayUrl } from "../utils/cloudflare";
import { isModelNotavailableInServer } from "../utils/model";

const serverConfig = getServerSideConfig();

export async function requestOpenai(req: NextRequest) {
  const controller = new AbortController();
  const authValue = req.headers.get("Authorization") ?? "";
  const authHeaderName = "Authorization";

  let path = `${req.nextUrl.pathname}`.replaceAll("/api/openai/", "");
  let baseUrl = serverConfig.baseUrl || OPENAI_BASE_URL;

  if (!baseUrl.startsWith("http")) baseUrl = `https://${baseUrl}`;
  if (baseUrl.endsWith("/")) baseUrl = baseUrl.slice(0, -1);

  const timeoutId = setTimeout(() => controller.abort(), 10 * 60 * 1000);
  const fetchUrl = cloudflareAIGatewayUrl(`${baseUrl}/${path}`);

  const fetchOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      [authHeaderName]: authValue,
      ...(serverConfig.openaiOrgId && { "OpenAI-Organization": serverConfig.openaiOrgId }),
    },
    method: req.method,
    body: req.body,
    redirect: "manual",
    // @ts-ignore
    duplex: "half",
    signal: controller.signal,
  };

  if (serverConfig.customModels && req.body) {
    try {
      const clonedBody = await req.text();
      fetchOptions.body = clonedBody;
      const jsonBody = JSON.parse(clonedBody) as { model?: string };

      if (isModelNotavailableInServer(serverConfig.customModels, jsonBody?.model as string, [ServiceProvider.OpenAI, jsonBody?.model as string])) {
        return NextResponse.json({ error: true, message: `Model ${jsonBody?.model} not allowed` }, { status: 403 });
      }
    } catch (e) {
      console.error("[OpenAI] filter error", e);
    }
  }

  try {
    const res = await fetch(fetchUrl, fetchOptions);
    const newHeaders = new Headers(res.headers);
    newHeaders.delete("www-authenticate");
    newHeaders.set("X-Accel-Buffering", "no");
    newHeaders.delete("content-encoding");

    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: newHeaders });
  } finally {
    clearTimeout(timeoutId);
  }
}
