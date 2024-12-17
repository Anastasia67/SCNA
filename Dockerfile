# pull base image
FROM node:20-buster-slim

# set our node environment, either development or production
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT=$PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g npm@10 expo-cli@6

# install dependencies first, in a different location for easier app bind mounting for local development
RUN mkdir /opt/SCNA
WORKDIR /opt/SCNA
ENV PATH=/opt/SCNA/.bin:$PATH
COPY ./frontend/SCNA/package.json ./frontend/SCNA/package-lock.json ./ 
RUN npm install

# copy in our source code last, as it changes the most
WORKDIR /opt/SCNA/frontend/SCNA
COPY ./frontend/SCNA .

ENTRYPOINT ["npm", "run"]
CMD ["web"]
