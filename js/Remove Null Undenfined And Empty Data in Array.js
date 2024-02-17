var list = [null, undefined, 0, 1, 2, '', 'test'];

var result = list.filter(Boolean);
var result_1 = list.filter(x => x);

console.log(result);
console.log(result_1);
