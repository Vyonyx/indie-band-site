# ============================================================
# Install dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat nasm autoconf automake bash
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --network-timeout 1000000
# ============================================================
# Rebuild the source code
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn build
# ============================================================
# Run the code
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN apk add --no-cache libc6-compat nasm autoconf automake bash

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# COPY .env ./

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ENV PORT 3000
EXPOSE $PORT

CMD ["node", "./server.js"]
