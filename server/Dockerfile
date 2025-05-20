FROM node:20-slim AS builder

WORKDIR /app

# Install curl for healthcheck
RUN apt-get update && apt-get install -y curl

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:$PORT || exit 1

# Use port from environment variable
EXPOSE $PORT

CMD ["npm", "start"]