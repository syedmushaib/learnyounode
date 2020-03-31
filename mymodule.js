const fs = require('fs');

module.exports = getDir = (path, extn, callBack) => {  
  const list = [];

  fs.readdir(path, (err, data) => {
    // if error retunr call back with error to make-it-modular
    if(err) return callBack(err);

    // if data then filter out as per extn and push to list array
    data.map( i => {
      if (i.indexOf(`.${extn}`) !== -1 ) {
        list.push(i);
      }
    });

    // call the callBack with list to make-it-modular
    callBack(null, list);
  });

};


// Official solution