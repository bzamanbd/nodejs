// const os = require('os'); 
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());

// console.log(__dirname);
// console.log(__filename);

const { join } = require('path');

const joinName = join(__dirname + '/../../views'); 
console.log(joinName);