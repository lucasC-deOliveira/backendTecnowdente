from node

workdir /usr/app

copy . .

run npm install

run npm run build

copy . .

expose 3333

cmd ["npm","run","dev"]