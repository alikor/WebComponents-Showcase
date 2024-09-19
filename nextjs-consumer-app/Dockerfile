# Dockerfile
FROM node:14-alpine

WORKDIR /app

COPY package.json next.config.js ./

RUN npm install

COPY pages ./pages

EXPOSE 4001

CMD ["npm", "run", "dev"]