const fs = require('fs');
// const fileUrl = './text.rtf';
// const inputUrl = process.argv.slice(2);

// const cb = (err, data) => {
//   let result = 0;
//   console.log(data, err);
//   if(err) {
//     console.log('err', err);
//   }
//   data.split(/\r?\n/).map( (i, idx) => {
//     result += idx;
//   });
//   console.log(result);
// };

// if (true) {
//   console.log('inputUrl', inputUrl);
//   fs.readFileSync(fileUrl, 'utf8', cb);
// }

const contents = fs.readFileSync(process.argv[2]);
// console.log('contents', contents);
const lines = contents.toString().split('\n');
// console.log('lines', lines);
console.log(lines.length-1);