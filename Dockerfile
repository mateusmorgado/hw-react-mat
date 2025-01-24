FROM node:22-alpine AS build

WORKDIR /app

COPY . .

RUN npm install


RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]