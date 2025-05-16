# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files
COPY . .

# Build the Vite React app
RUN npm run build

# Install `serve` to serve the production build
RUN npm install -g serve

# Expose port
EXPOSE 9194

# Use `--single` to support React Router fallback
CMD ["serve", "-s", "dist", "-l", "9194", "--single"]