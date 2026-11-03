# Base image with Node.js 20
FROM node:20-alpine

# Working directory
WORKDIR /app

# Copy package file
COPY package.json .

# Copy server file
COPY server.js .

# Application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]