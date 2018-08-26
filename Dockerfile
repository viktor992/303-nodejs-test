FROM node:8
RUN mkdir /303-nodejs-test
ADD . /303-nodejs-test
WORKDIR /303-nodejs-test
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]