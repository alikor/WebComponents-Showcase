# Dockerfile
FROM node:14-alpine

WORKDIR /app

COPY src/ ./src/

RUN npm install -g http-server

EXPOSE 4000

CMD ["http-server", "src", "-p", "4000"]
