FROM node:18

WORKDIR  /usr/src/app

COPY .  /usr/src/app

RUN npm install

RUN npm run build

ENV PORT 80

EXPOSE 80

CMD ["npm", "run", "dev"]