# Dockerfile
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install express

COPY src/ ./src/

EXPOSE 3000

CMD ["node", "src/server.js"]
