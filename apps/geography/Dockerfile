FROM node:16.13.1 as build-env
LABEL maintainer=tfg2021.escinf.una@gmail.com

# Building the container

EXPOSE 3000
WORKDIR /app

COPY /package.json .
RUN npm install

COPY /dist/apps/geography .

ENTRYPOINT ["node", "./main.js"]