let person = { id: 9527, name: 'gl', age: 18, family: [{ father: 'father' }, { mother: 'mother' }, { brother: 'brother' }] };
person.family[0] = { father: 'f father' };
console.log("%c person: %c calamus.xyz %c ", 'color: red; ');
function func_components(config) {
    return config;
}
// 通过类型断言排除 error: 'background' not expected in type 'DivBox'
let component = func_components({ width: 100, background: '#fff' });
// 将参数对象赋值给另一个变量再作为参数传入函数可以绕过 TS 的静态编译
let params = { width: 100, background: '#fff' };
let component_2 = func_components(params);
let array;
array = ['Bob', 'Fred'];
// 通过一个工具函数赖创建实例
function createClock(constr, hour, minute) {
    return new constr(hour, minute);
}
class AnalogClock {
    constructor(hour, minute) { }
    tick() { console.log("tick tock"); }
}
let analogClock = createClock(AnalogClock, 7, 12);
console.log("analogClock", analogClock);
let square = { sideLength: 1, color: '#fff', penWidth: 1 }; // 必须三个 
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
/**
 * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
 * 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
 * 接口同样会继承到类的private和protected成员。
 * 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
 * 这个接口类型只能被这个类或其子类所实现（implement）
 */
class Control {
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
}
class ImageBox extends Control {
    // implements SelectableControl {  // 错误实现
    // private state: '' // Control 私有属性 不能在这使用
    select() { }
}
