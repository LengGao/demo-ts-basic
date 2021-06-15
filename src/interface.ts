interface PersonInterface {
  readonly id: number // 只能在刚刚创建改变其值，同 final, const
  name: string
  age: number
  readonly family?: Array<object> // readonly 限制不住 需要依赖 ReadonlyArray<T>类型（与Array<T>相似）才可以确保数组创建后不被修改
  glrlfriends?: object
}

let person: PersonInterface = {id: 9527, name: 'gl', age: 18, family: [{father: 'father'}, {mother: 'mother'}, {brother: 'brother'}]  }

person.family[0] = {father: 'f father'}
console.log("%c person: %c calamus.xyz %c ", 'color: red; ');

/**
 * 象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。 
 * 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误
 */
interface DivBox {
  height?: number
  width?: number
}

function func_components (config: DivBox): any {
  return config
}

// 通过类型断言排除 error: 'background' not expected in type 'DivBox'
let component = func_components({width: 100, background: '#fff'} as DivBox)  

// 将参数对象赋值给另一个变量再作为参数传入函数可以绕过 TS 的静态编译
let params = {width: 100, background: '#fff'}
let component_2 = func_components(params)

// 添加索引签名 当传入属性不为前面所定义时，可以兼容任意数量，类型的属性出现
interface DivBox {
  height?: number
  width?: number
  [anyPropName: string]: any
}

interface indexable {
  [index: number]: string // 可索引的类型  js 的可索引类型分为 number string symbol 最终都转换为String 所以需要保持一致
  // readonly [index: number]: string  // 防止索引被赋值
}
let array: indexable; array = ['Bob', 'Fred']

// interface NumberDictionary {
//   name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
//   [index: string]: number;
//   length: number;    // 可以，length是number类型
// }

// 接口只用于约束类的实例部分，要约束静态部分需要变通
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}

interface ClockInterface {
  tick(): void
}

// 通过一个工具函数赖创建实例
function createClock(constr: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new constr(hour, minute)
}

class AnalogClock implements ClockInterface {
  constructor(hour: number, minute: number) { }
  tick() { console.log("tick tock"); }
}

let analogClock = createClock(AnalogClock, 7, 12)
console.log("analogClock", analogClock);


/**
 * 接口多继承实现 接口高复用
 */
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square: Square = {sideLength: 1, color: '#fff', penWidth: 1}; // 必须三个 

 
/**
 * 混合类型
 * 一个对象可以同时作为函数和对象使用
 * 在使用JavaScript第三方库的时候，你可能需要像上面那样去完整地定义类型
 */
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
 
function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {}
  return counter
}

/**
 * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 
 * 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
 * 接口同样会继承到类的private和protected成员。 
 * 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
 * 这个接口类型只能被这个类或其子类所实现（implement）
 */
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() { }
}
class TextBox extends Control {
  select() {}
}

class ImageBox 
extends Control {
// implements SelectableControl {  // 错误实现
// private state: '' // Control 私有属性 不能在这使用
  select() {} 
}




