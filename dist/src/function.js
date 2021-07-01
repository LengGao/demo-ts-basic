// 函数完整类型定义：参数类型与返回值类型
let myAdd = function (x, y) { return x + y; };
function bildName(firstName, lastName) { return firstName + lastName; }
function bildName2(firstName = 'z', lastName = 's') { return firstName + lastName; }
function bildName3(firstName, lastName) { return firstName + lastName; }
function bildName4(firstName, ...nextName) { return firstName + nextName.join(' '); }
bildName('l', '');
bildName2('l');
bildName3('z');
