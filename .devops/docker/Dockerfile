FROM node:16-alpine
RUN npm i -g nodemon@2

# upgrade alpine
RUN apk update && apk upgrade

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# copy output
COPY .output /usr/src/nuxt-app/

# set environment
EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# run nodemon
CMD [ "nodemon", "server/index.mjs" ]