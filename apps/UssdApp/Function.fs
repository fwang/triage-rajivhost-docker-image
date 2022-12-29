module LambdaFunctions

open System.Net
open Amazon.Lambda.Core
open System.Collections.Generic
open Amazon.Lambda.APIGatewayEvents
open Amazon.Lambda.Serialization.SystemTextJson

[<LambdaSerializer(typeof<DefaultLambdaJsonSerializer>)>]
let handleHttpEvent (event: APIGatewayHttpApiV2ProxyRequest) (_: ILambdaContext) =
    
    let headers = Dictionary<string, string>()
    headers.Add("Content-Type", "text/plain")
    let response = APIGatewayHttpApiV2ProxyResponse()
    response.StatusCode <- int HttpStatusCode.OK
    response.Body <- sprintf "Hello, World! Your request was received at %s." event.RequestContext.Time
    response.Headers <- headers

    response