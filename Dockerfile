FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Create a working directory
WORKDIR /home/node/app

# Create a working directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]