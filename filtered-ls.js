const fs = require('fs');
const fileExtn = process.argv[3];

fs.readdir(process.argv[2], (err, data) => {
  if (err) throw err;
  data.map( i => {
    if (i.indexOf(`.${fileExtn}`) !== -1 ) {
      console.log(i);
    }
  });
});


// Official solution
// 'use strict'
//     const fs = require('fs')
//     const path = require('path')

//     const folder = process.argv[2]
//     const ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })
