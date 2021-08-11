/** 
 * 类型 
 */
let str: string = 'str',
    bol: boolean = true,
    num: number = 1,
    nul: null = null,
    und: undefined = undefined
    // smb: Symbol = Symbol(1)
    // big: bigint = BigInt('9007199254740993');

let arr: Array <any> = [],
    tup: [string, number] = ['str', 1]; // tuple 元组就有不同类型元素的数组 

enum Enums { string, number, boolean = 3 } // 相似于map，set 集合 可通过从零开始的下标值（或设定的下标值）获取属性名，亦可通过属性名获取下标值
let enums: Enums = Enums.string || Enums.boolean,
    obj: Object = { name: Enums[0] }

// any 任一类型，void 无任何类型，never 永不存在的值的类型
let anys: any = Enums[1],
    func_void = (): void => undefined,
    func_never = (): never => { throw new Error() };

// 类型断言 告诉编译器我知道这是一个xxx类型，从而通过静态检查
let any_or_child: any = '任何类型或是目标类型的子集',
    type: number = (<string> any_or_child).length,
    type_as: number = (any_or_child as string).length

console.log(`TS类型；'\n'
  基本类型：... ,
  引用类型：array：${arr}, tuple: ${tup}, enum：${enums}, object: ${obj}
  特殊类型：any：${anys}, void：${func_void}, never：${func_never}
  类型推断：(<type> variable), (variable as type)
`);

/** 类型推论 —— 通用类型算法*/
class Animals {}
class Rhino extends Animals{}
class Elephant extends Animals{}
class Snake extends Animals{}

let x = [0, 1, null]
// 当候选类型共享相同的通用类型，但没有一个类型能为所有候选类型的类型
// 如：让下面推断为Animals，这个时候需明确指出
// 如果没有找到最佳通用类型的话，类型推断的结果A为联合数组类型，(Rhino | Elephant | Snake)[]。
let zoo: Animals[] = [new Rhino(), new Elephant(), new Snake()];

window.onmousedown = function(e: MouseEvent) {
    console.log(e.button)
}

/**
 * TS中的类型兼容性是基于结构子类型的
 * 类型系统（即强类型与弱类型）：
 *  1，基于结构类型的类型系统：数据兼容性或等价性需要通过明确声明来确定
 *  2，基于名义类型的类型系统：数据兼容性或等价性不需要通过明确声明来确定
 * 结构类型：一种只使用其成员来描述类型的方式，
 * 名义类型：一种通过明确的声明或类型名称来描述类型的方式。
 */
interface unreliableTypeSystem {
    id: number;
    name: string;
    age: number;
}
let a: unreliableTypeSystem;
let b = {id: 1, name: "zs", age: 1}
let c = {name: "ls"}
// a = b; ok
// a = c; error
