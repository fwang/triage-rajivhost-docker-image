# Dockerfile to build Lambda functions
FROM mcr.microsoft.com/dotnet/sdk:7.0 as builder
ARG FUNCTION_NAME
WORKDIR /src

# Install Paket
RUN dotnet tool install paket -g

# add dotnet tools to path to pick up fake and paket installation
ENV PATH="/root/.dotnet/tools:${PATH}"

COPY paket.dependencies paket.dependencies
COPY paket.lock paket.lock
RUN paket restore

COPY . .
RUN dotnet publish "$FUNCTION_NAME/$FUNCTION_NAME.fsproj" \
            --configuration Release \ 
            --framework net7.0 \
            --runtime linux-x64 \
            --self-contained false \ 
            --output /app/publish \
            -p:PublishReadyToRun=true \
            -p:DebugSymbols=False

FROM public.ecr.aws/lambda/dotnet:7
WORKDIR /var/task
COPY --from=builder /app/publish .