FROM node:16-alpine3.11

WORKDIR /deploy

ENV PORT 80

COPY . /deploy

RUN npm install

CMD ["npm", "run", "dev"]