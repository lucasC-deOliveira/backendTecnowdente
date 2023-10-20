from node

workdir /usr/app

copy . .

run npm install

run npm run build

expose 3333

cmd ["npm","run","start:dev"]