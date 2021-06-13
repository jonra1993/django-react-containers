FROM node:14-alpine

# set work directory
WORKDIR /code
# install dependencies
COPY package*.json /code/
RUN yarn install

# copy project
# COPY . /code/