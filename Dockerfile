FROM node:18-alpine3.16

RUN mkdir -p /users-angular-challenge
WORKDIR /users-angular-challenge
COPY . .

RUN npm i -g serve
RUN npm i -g @angular/cli
RUN npm install
RUN ng build
EXPOSE 4200

CMD ["serve", "./dist/users-angular-challenge", "-l", "tcp://0.0.0.0:4200"]
