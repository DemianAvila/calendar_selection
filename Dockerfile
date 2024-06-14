FROM                node:22-bookworm
COPY ["./app", "/app"] \
    --exclude="./app/node_modules"
WORKDIR             /app
RUN                 yarn install
