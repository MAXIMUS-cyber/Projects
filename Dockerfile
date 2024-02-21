FROM node:14-alpine as build

WORKDIR /app

COPY dist .

FROM nginx:alpine

COPY ./dist /usr/share/nginx/html

ENV PORT=80

EXPOSE 80

CMD ["nginx", "-g" , "daemon off;"]


