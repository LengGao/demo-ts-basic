interface Box {
    height: number;
    width: number;
    func: (x: number, y: number) => void;
}

interface Box {
    scale: number;
    func: (x: number, y: number) => void;
}

let box: Box = {height: 5, width: 5, scale: 10, func(x: number, y: number){}}
/**
 * 接口的非函数的成员应该是唯一的。如果它们不是唯一的，
 * 那么它们必须是相同的类型。
 * 如果两个接口中同时声明了同名的非函数成员且它们的类型不同，则编译器会报错。
 * 对于函数成员，每个同名函数声明都会被当成这个函数的一个重载。 
 * 同时需要注意，当接口 A与后来的接口 A合并时，后面的接口具有更高的优先级
 */
class Sheep {}
class Dog {}

 interface Cloner {
    clone(animal: Animal): Animal;
}

interface Cloner {
    clone(animal: Sheep): Sheep;
}

interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
}
// 上述将被合并为：
interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
    clone(animal: Sheep): Sheep;
    clone(animal: Animal): Animal;
}

/** 这个规则有一个例外是当出现特殊的函数签名时。 
 * 如果签名里有一个参数的类型是 单一的字符串字面量
 * （比如，不是字符串字面量的联合类型），
 * 那么它将会被提升到重载列表的最顶端。
 */
 interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}

interface Document {
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
}