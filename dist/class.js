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
/**
 * 修饰符 modifier
 * 结论：
 *  public 对所有开放，private 对定义该属性的类内部开放，protected 对定义该属性的类内部以及其后代类开放
 */
var Animal = /** @class */ (function () {
    function Animal(theName, age, shout) {
        this.name = theName;
        this.age = age;
        this.shout = shout;
    }
    Animal.prototype.move = function (distance) { console.log(this.name + "moved" + distance + "m\u3002"); };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(theName, age, shout) {
        var _this = _super.call(this, theName, age, shout) || this;
        _this.name = theName;
        _this.shout = shout;
        return _this;
    }
    return Cat;
}(Animal));
var Tabby = /** @class */ (function (_super) {
    __extends(Tabby, _super);
    function Tabby(theName, age, shout) {
        return _super.call(this, theName, age, shout) || this;
    }
    return Tabby;
}(Cat));
// new Animal().name // is ok
// new Animal().age // is error
// new Animal().shout // is error
// var cat = new Cat('huahua', 1, 'miaomiao')
// console.log(cat.shout);  // is ok
// console.log(cat.age); // is error
// console.log(new Tabby('nini', 1, 'miaomiao').shout) ;  // is ok
/**
 * 存取器 getter setter
 */
var Employee = /** @class */ (function () {
    function Employee(petNmae) {
        this.petNmae = petNmae;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this.__fullName;
        },
        set: function (value) {
            this.__fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
Employee.facialFeatures = { face: '', eye: '', nose: '', ears: '', mouth: '' };
// console.log(Employee.facialFeatures); // {face: '', eye: '', nose: '', ears: '', mouth: ''}
/**
 * 抽象类：概念同JAVA
 */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.shout = function () { };
    return Person;
}());
/**
 * 实例部分与静态部分
 */
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter; // 意思是Greeter类的实例的类型是 Greeter
console.log(greeter, new Greeter().greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "hey there";
console.log(greeterMaker, new greeterMaker().greet());
