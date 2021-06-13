/**
 * 类型
 */
var str = 'str', bol = true, num = 1, nul = null, und = undefined;
// smb: Symbol = Symbol(1)
// big: bigint = BigInt('9007199254740993');
var arr = [], tup = ['str', 1]; // tuple 元组就有不同类型元素的数组 
var Enums;
(function (Enums) {
    Enums[Enums["string"] = 0] = "string";
    Enums[Enums["number"] = 1] = "number";
    Enums[Enums["boolean"] = 3] = "boolean";
})(Enums || (Enums = {})); // 相似于map，set 集合 可通过从零开始的下标值（或设定的下标值）获取属性名，亦可通过属性名获取下标值
var enums = Enums.string || Enums.boolean, obj = { name: Enums[0] };
var anys = Enums[1], func_void = function () { return undefined; }, func_never = function () { throw new Error(); };
// 类型断言 告诉编译器我知道这是一个xxx类型，从而通过静态检查
var any_or_child = '任何类型或是目标类型的子集', type = any_or_child.length, type_as = any_or_child.length;
console.log("TS\u7C7B\u578B\uFF1B'\n'\n  \u57FA\u672C\u7C7B\u578B\uFF1A... ,\n  \u5F15\u7528\u7C7B\u578B\uFF1Aarray\uFF1A" + arr + ", tuple: " + tup + ", enum\uFF1A" + enums + ", object: " + obj + "\n  \u7279\u6B8A\u7C7B\u578B\uFF1Aany\uFF1A" + anys + ", void\uFF1A" + func_void + ", never\uFF1A" + func_never + "\n  \u7C7B\u578B\u63A8\u65AD\uFF1A(<type> variable), (variable as type)\n");
