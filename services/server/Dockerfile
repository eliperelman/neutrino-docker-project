FROM node:8 as base

# Copying generated node_modules from the first stage
COPY --from=ndp-workspace /app /app
WORKDIR /app/services/server/
COPY . .

# Running yarn install in case some dependencies are not here
RUN yarn --frozen-lockfile
ENV NODE_ENV production
RUN yarn build
