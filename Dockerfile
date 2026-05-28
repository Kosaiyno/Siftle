FROM node:20-alpine
WORKDIR /app

# Install production dependencies
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Copy app
COPY . .

# Default port the app listens on
ENV PORT=5173
EXPOSE 5173

# Start the server
CMD ["node", "scripts/serve.mjs"]
