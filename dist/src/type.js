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
// any 任一类型，void 无任何类型，never 永不存在的值的类型
let anys = Enums[1], func_void = () => undefined, func_never = () => { throw new Error(); };
// 类型断言 告诉编译器我知道这是一个xxx类型，从而通过静态检查
let any_or_child = '任何类型或是目标类型的子集', type = any_or_child.length, type_as = any_or_child.length;
console.log(`TS类型；'\n'
  基本类型：... ,
  引用类型：array：${arr}, tuple: ${tup}, enum：${enums}, object: ${obj}
  特殊类型：any：${anys}, void：${func_void}, never：${func_never}
  类型推断：(<type> variable), (variable as type)
`);
/** 类型推论 —— 通用类型算法*/
class Animals {
}
class Rhino extends Animals {
}
class Elephant extends Animals {
}
class Snake extends Animals {
}
let x = [0, 1, null];
// 当候选类型共享相同的通用类型，但没有一个类型能为所有候选类型的类型
// 如：让下面推断为Animals，这个时候需明确指出
// 如果没有找到最佳通用类型的话，类型推断的结果A为联合数组类型，(Rhino | Elephant | Snake)[]。
let zoo = [new Rhino(), new Elephant(), new Snake()];
window.onmousedown = function (e) {
    console.log(e.button);
};
let a;
let b = { id: 1, name: "zs", age: 1 };
let c = { name: "ls" };
// a = b; ok
// a = c; error
