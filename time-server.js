const net = require('net');

const serverListenOn = parseFloat(process.argv[2]);

const server = net.createServer((socket) => {

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let day = date.getDate()  < 10 ? `0${date.getDate()}` : date.getDate();
  let hrs = date.getHours();
  let min = date.getMinutes();

  const currentTime  = 
  `${year}-${month}-${day} ${hrs}:${min}
`;
  socket.end(currentTime);
}).on('error', (err) => {
  // handle errors here
  throw err;
});

server.listen(serverListenOn);


// official solution

// //'use strict'
// const net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   const d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// const server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))
