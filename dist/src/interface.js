var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = { id: 9527, name: 'gl', age: 18, family: [{ father: 'father' }, { mother: 'mother' }, { brother: 'brother' }] };
person.family[0] = { father: 'f father' };
console.log("%c person: %c calamus.xyz %c ", 'color: red; ');
function func_components(config) {
    return config;
}
// 通过类型断言排除 error: 'background' not expected in type 'DivBox'
var component = func_components({ width: 100, background: '#fff' });
// 将参数对象赋值给另一个变量再作为参数传入函数可以绕过 TS 的静态编译
var params = { width: 100, background: '#fff' };
var component_2 = func_components(params);
var array;
array = ['Bob', 'Fred'];
// 通过一个工具函数赖创建实例
function createClock(constr, hour, minute) {
    return new constr(hour, minute);
}
var AnalogClock = /** @class */ (function () {
    function AnalogClock(hour, minute) {
    }
    AnalogClock.prototype.tick = function () { console.log("tick tock"); };
    return AnalogClock;
}());
var analogClock = createClock(AnalogClock, 7, 12);
console.log("analogClock", analogClock);
var square = { sideLength: 1, color: '#fff', penWidth: 1 }; // 必须三个 
function getCounter() {
    var counter = function (start) { };
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
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
var ImageBox = /** @class */ (function (_super) {
    __extends(ImageBox, _super);
    function ImageBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // implements SelectableControl {  // 错误实现
    // private state: '' // Control 私有属性 不能在这使用
    ImageBox.prototype.select = function () { };
    return ImageBox;
}(Control));
