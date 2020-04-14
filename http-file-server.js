var fs = require('fs');
var http = require('http');

server = http.createServer(function(req, res) {
	fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(process.argv[2]);


// offical solution
// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))