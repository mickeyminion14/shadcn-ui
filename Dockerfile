FROM node:18-alpine As appbuild
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
#RUN apk add curl
EXPOSE 3011
CMD ["npm", "run", "start"]
