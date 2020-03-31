const http = require('http');

//const url = `http://nodejs.org/dist/index.json`;

const url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');
  
  // let rawData = '';
  res.on('data', (chunk) => {
    // rawData += chunk;
    console.log(chunk);
  });
  res.on('error', (error) => {
    console.log(error);
  });
});


// Official solution
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })