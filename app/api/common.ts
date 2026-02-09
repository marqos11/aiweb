import { NextRequest, NextResponse } from "next/server";
import { ServiceProvider } from "../constant";
import { isModelNotavailableInServer } from "../utils/model";
import { getAccessConfig } from "../config/server";

export async function handleModelAvailability(req: NextRequest, jsonBody: any) {
  const { customModels } = getAccessConfig();
  
  if (
    isModelNotavailableInServer(
      customModels,
      jsonBody?.model as string,
      [
        ServiceProvider.OpenAI,
        // Removed ServiceProvider.Azure reference to fix build error
        jsonBody?.model as string,
      ],
    )
  ) {
    return NextResponse.json(
      {
        error: true,
        message: `Model ${jsonBody?.model} is not available in server`,
      },
      { status: 403 },
    );
  }
}
// ... (rest of the handle logic stays same)
