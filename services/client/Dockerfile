FROM node:17-alpine

WORKDIR /app
COPY package.json .
COPY packages packages
COPY services/client services/client
RUN yarn

CMD ["yarn", "--cwd", "./services/client",  "dev" ]

