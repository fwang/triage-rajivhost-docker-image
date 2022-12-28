import * as lambda from "aws-cdk-lib/aws-lambda";
import { StackContext, Api } from "@serverless-stack/resources";

export const FunctionStack = ({ stack, app }: Stackcontext) => {

  const ussdServerFunction = new lambda.DockerImageFunction(stack, "ussd-server", {
    code: lambda.DockerImageCode.fromImageAsset("apps", {
      buildArgs: {
        FUNCTION_NAME: "UssdApp",
      },
      cmd: ["UssdApp::LambdaFunctions::handleHttpEvent"],
    }),
    memorySize: 1024,
  });

  return { ussdServerFunction };
}

