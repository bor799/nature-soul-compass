# Multi-stage build - Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Production stage - Serve static files with Nginx
FROM nginx:alpine

# Copy build output to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Expose port (will use PORT env var by AI Builder)
EXPOSE 8000

# Start Nginx with envsubst to replace ${PORT}
CMD sh -c "envsubst '\$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
