FROM node:19-alpine
WORKDIR /client

COPY . .
RUN npm install

EXPOSE 4000

CMD [ "npm", "start" ]
