// generic paradigm 泛型

function identity(arg: number): number {
    return arg;
}

function identity2 (arg: any): any {
    return arg;
}

function identity3<T> (arg: T): T {
    return arg;
}

function identity4<T> (arg: T): string {
    var s = String(arg);
    // arg = '' // error
    // arg = String(arg) // error
    return String(arg) || ''
}
identity4('s')
function identity5<T> (arg: string): T {
    let a: T;
    let b: any
    // a = parseInt(arg) //error
    // Math.floor(arg) error
    // let c = <T>arg // error
    // return <any> // ok
    // return b // ok
    // return <T> // ok
    return a  // ok
}
identity5<number>('s')

function identity6<T> (arg: T[]): T[] {
    // arg[1] = '' // error
    console.log(arg.length);
    return arg
}

interface Identity {
    length: number;
}

// 限制类型变量 必须包含length
function identity7<T extends Identity> (arg: T): T {
    console.log(arg.length);
    return arg
}
identity7('s')
// identity7(1) // error


function identity8<T,K> (arg: T): T {
    return arg
}

/**
 * Generic Paradign 泛型
 * 定义：在TS中泛型又称为类型变量，用于将类型参数化，限制函数运算的输入输出，便于跟踪函数内使用的类型信息，从而减少类型异常的发生
 * 场景：常使用在输入类型与输出类型相同而any等又不适用的情景下
 * 目的：类型参数化，因为any会导致数据类型信息不完整，例如length属性并不是所有类型数据都具备
 * 意义：
 *   1，可扩展性：泛型限制了输入输出，因此代码必须是在类型参数约束下通用的
 *   2，高效性：让那些不能在编译阶段确定类型的运算可以被静态检查到，以减少运行时类型异常的发生
 * 在TS中目前只有extends可以对泛型变量进行约束T extends ? 相当于T继承了?，效果如同使用接口约束函数与类
 */
interface N {
    length: number;
}

function Generic<T> (arg: T) : T {
    return arg
}
Generic<string>('a') // 可借由类型推论省去泛型变量的输入

function Generic2<T, K> (arg1: T, arg2: K): T {
    // return arg1 + arg2
    return arg1
}
Generic2(1,2)

function Generic3<T extends N> (arg1: T): T {
    return arg1
}
// Generic3(1) // error
Generic3('s')







