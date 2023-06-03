const fund = require('./fundamentals');

console.log('gaurav');
console.log(fund);
console.log(fund.a);
console.log(fund.z);
console.log(fund.f(225));

const fs = require('fs');

fs.writeFileSync('hw.txt','Hello world.');

console.log(__dirname);
console.log(__filename);
