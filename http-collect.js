const http = require('http');

//const url = `http://nodejs.org/dist/index.json`;

const url = process.argv.slice(2);

http.get(url, (res) => {
  res.setEncoding('utf8');
  
  let rawData = '';
  res.on('data', (chunk) => {
    rawData += chunk.toString();
  });
  res.on('end', () => {
    console.log(rawData.length);
    console.log(rawData);
  });
  res.on('error', (error) => {
    console.log(error);
  });
});


// Official solution
// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })