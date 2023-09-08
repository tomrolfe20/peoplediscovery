FROM node:18

WORKDIR  /usr/src/app

COPY .  /usr/src/app

RUN npm install

CMD ["npm", "run", "dev"]