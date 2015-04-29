var readsalot = require('../lib/readsalot');

var suite1 = readsalot('/fixtures/subdir');
var suite2 = readsalot('/fixtures');

console.log(suite1);
console.log(suite2);
