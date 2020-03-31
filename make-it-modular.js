const myModule = require('./mymodule');

const fileExtn = process.argv[3];
const path = process.argv[2];

const cb = (err, data) => {
  if (err) return console.error(err);

  data.map(i => {
    console.log(i);
  });
};

myModule(path, fileExtn, cb);
