FROM node:8 as base

# Copying generated node_modules from the first stage
COPY --from=ndp-workspace /app /app
WORKDIR /app/services/ui/
COPY . .

RUN yarn build

# In the final ui build, only copy the built assets, since all node_modules are bundled
FROM node:8
WORKDIR /app/services/ui/
COPY --from=base /app/services/ui/build build
COPY --from=base /app/services/ui/package.json .
