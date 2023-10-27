from node

workdir /usr/app

copy . .

run npm install

run npm run build

run npm run typeorm:migration:run 

run npm run seed:admin

expose 3333

cmd ["npm","run","start"]