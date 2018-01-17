FROM node:8 as base

# Copying generated node_modules from the first stage
COPY --from=ndp-workspace /app /app
WORKDIR /app/services/server/
COPY . .
RUN yarn build
