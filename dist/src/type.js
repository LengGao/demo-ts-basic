/**
 * 类型
 */
let str = 'str', bol = true, num = 1, nul = null, und = undefined;
// smb: Symbol = Symbol(1)
// big: bigint = BigInt('9007199254740993');
let arr = [], tup = ['str', 1]; // tuple 元组就有不同类型元素的数组 
var Enums;
(function (Enums) {
    Enums[Enums["string"] = 0] = "string";
    Enums[Enums["number"] = 1] = "number";
    Enums[Enums["boolean"] = 3] = "boolean";
})(Enums || (Enums = {})); // 相似于map，set 集合 可通过从零开始的下标值（或设定的下标值）获取属性名，亦可通过属性名获取下标值
let enums = Enums.string || Enums.boolean, obj = { name: Enums[0] };
let anys = Enums[1], func_void = () => undefined, func_never = () => { throw new Error(); };
// 类型断言 告诉编译器我知道这是一个xxx类型，从而通过静态检查
let any_or_child = '任何类型或是目标类型的子集', type = any_or_child.length, type_as = any_or_child.length;
console.log(`TS类型；'\n'
  基本类型：... ,
  引用类型：array：${arr}, tuple: ${tup}, enum：${enums}, object: ${obj}
  特殊类型：any：${anys}, void：${func_void}, never：${func_never}
  类型推断：(<type> variable), (variable as type)
`);
