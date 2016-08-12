// here is server file

console.log(__dirname);

var fs = require('fs');

var r = fs.readFileSync('js/people.json');

console.log(r);