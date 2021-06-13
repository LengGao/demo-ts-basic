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



