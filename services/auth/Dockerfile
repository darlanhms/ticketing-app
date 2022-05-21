FROM node:17-alpine

WORKDIR /app
COPY package.json .
COPY packages packages
COPY services/auth services/auth
RUN yarn

CMD ["yarn", "--cwd", "./services/auth",  "start" ]

