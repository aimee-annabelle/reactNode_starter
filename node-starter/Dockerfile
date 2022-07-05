FROM node:18.4-alpine3.15

WORKDIR /usr/app

COPY package.json .

RUN yarn install

COPY . .


EXPOSE 5001

CMD ["yarn", "start"]