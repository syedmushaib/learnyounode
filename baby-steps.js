function sum(arg) {
  const getInput = arg.slice(2);
  let result = 0;
  getInput.map(i => {
    if (!isNaN(i)) {
      result += Number(i);
    }
  });
  console.log(result);
}

sum(process.argv);

// 'use strict'

// let result = 0

// for (let i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)