FROM node:24-alpine

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json* ./

RUN npm ci

# Copy application source
COPY . .

# Default port; override with PORT at container runtime if needed
ENV PORT=3001
ENV NODE_ENV=production

# SQLite data is expected to live on a separate volume mounted at /app/data
ENV DB_STORAGE=/app/data/db.db
RUN mkdir -p /app/data && chown -R node:node /app/data

EXPOSE ${PORT}

# Run as non-root
USER node

# Run seed once on startup (idempotent), then start the server
CMD ["sh", "-c", "node seed.js && exec node index.js"]
