import { ApiStack } from "./api-stack";
import { FunctionStack } from "./function-stack";
import { App } from "@serverless-stack/resources";

export default function main (app: App): void {
  app.setDefaultFunctionProps({
    // runtime: "dotnet6",
    srcPath: "apps",
    // memorySize: app.stage === StageName.PROD ? 2048 : 1024,
  });

  app.stack (FunctionStack).stack(ApiStack);
}
