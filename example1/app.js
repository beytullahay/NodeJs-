const http = require('http');  // ağa bağlanma
const routes = require('./routes');  // routes.js yi çağırdık buraya

const server = http.createServer(routes); 

server.listen(3000);  // serveri dinleme
console.log('listenin port on 3000...');
