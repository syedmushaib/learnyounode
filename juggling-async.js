const http = require('http');

const urls = process.argv.slice(2);
let callCount = 0;

const cb =  (res) => {
  res.setEncoding('utf8');
    
  let rawData = '';
  res.on('data', (chunk) => {
    rawData += chunk.toString();
  });
  res.on('end', () => {
    callCount += 1;
    console.log(rawData);
    if (callCount < urls.length) {
      getData(urls[callCount]);
    }
  });
  res.on('error', (error) => {
    console.log(error);
  });
};


const getData = (url) => {
   http.get(url, cb);
};

getData(urls[callCount]);



// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }
