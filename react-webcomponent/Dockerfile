# Dockerfile

# Use a Node.js base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React Web Component
RUN npm run build

# Install http-server globally to serve static files
RUN npm install -g http-server

# Expose port 3001
EXPOSE 3001

# Command to serve the dist directory with CORS enabled
CMD ["http-server", "dist", "-p", "3001", "--cors"]