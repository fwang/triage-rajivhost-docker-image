import { FunctionStack } from "./function-stack";
import { use, StackContext, Api } from "@serverless-stack/resources";

export const ApiStack = ({ stack, app }: Stackcontext) => {
  const { ussdServerFunction } = use (FunctionStack);

  const api = new Api(stack, "ussd-api", {
    routes: {
      "GET /": {
        cdk: {
          function: ussdServerFunction,
        },
      },
    },
  });
  return { api };
}
