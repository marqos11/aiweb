import { ApiPath } from "@/app/constant";
import { NextRequest } from "next/server";
import { handle as openaiHandler } from "../../openai";
import { handle as googleHandler } from "../../google";
// ... other handlers
import { handle as proxyHandler } from "../../proxy";

async function handle(
  req: NextRequest,
  { params }: { params: { provider: string; path: string[] } },
) {
  const apiPath = `/api/${params.provider}`;
  switch (apiPath) {
    case ApiPath.Google:
      return googleHandler(req, { params });
    case ApiPath.OpenAI:
      return openaiHandler(req, { params });
    // Azure switch case removed to fix build error
    default:
      return proxyHandler(req, { params });
  }
}

export const GET = handle;
export const POST = handle;
export const runtime = "edge";
