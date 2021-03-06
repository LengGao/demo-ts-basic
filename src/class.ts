/**
 * 修饰符 modifier
 * 结论：
 *  public 对所有开放，private 对定义该属性的类内部开放，protected 对定义该属性的类内部以及其后代类开放
 */
class Animal {
    public name: string;
    private age: number; // 私用数据命名规范应该为 private __age: number;
    protected shout: string;
    public constructor(theName: string, age: number, shout: string) { 
        this.name = theName;
        this.age = age;
        this.shout = shout;
    }
    public move(distance: number) { console.log(`${this.name}moved${distance}m。`) }
}

class Cat extends Animal {
    public name: string;
    // private age: number;  Animal中已有相同声明
    public shout: string;
    constructor(theName: string, age: number, shout: string) {
        super(theName, age, shout); // TS中调用父类构造器需要传递其中必填参数, 因此我推断JS中类的继承是合并函数的作用域链
        this.name = theName;
        this.shout = shout;
    }
}

class Tabby extends Cat {
    constructor(theName: string, age: number, shout: string) {
        super(theName, age, shout)
    }
}

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
class Employee {
    static facialFeatures: object;
    private __fullName: string;
    constructor(public petNmae?: string) {}
    get fullName(): string {
        return this.__fullName;
    }
    set fullName(value: string) {
        this.__fullName = value;
    }
}
Employee.facialFeatures = {face: '', eye: '', nose: '', ears: '', mouth: ''}
// console.log(Employee.facialFeatures); // {face: '', eye: '', nose: '', ears: '', mouth: ''}

/**
 * 抽象类：概念同JAVA
 */
abstract class Person {
    abstract jumped(): void
    shout(): void {}
}

/**
 * 实例部分与静态部分
 */
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        } else {
            return Greeter.standardGreeting;
        }
    }
}

var greeter: Greeter // 意思是Greeter类的实例的类型是 Greeter
console.log(greeter, new Greeter().greet()); // undefined "Hello, there"
var greeterMaker: typeof Greeter = Greeter // 意思是将Greeter的构造函数赋值
greeterMaker.standardGreeting = "hey there"
console.log(greeterMaker, new greeterMaker().greet()); // [Function: Greeter] { standardGreeting: 'hey there' } hey there

/**
 * 类描述 class describe
 * ES6为new命令引入了一个new.target属性，（在构造函数中）返回new命令作用于的那个构造函数。
 * 如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的
 */
 var ClassDescribe = /** @class */ (function () {
    /* ---------------------- ClassDescribe start ---------------------- */
    /*  这是类开辟的空间，即静态部分，若类中的实例属性未被赋值则不会出现在类内部中
        若被引用则会以this.xxx 形式出现在ClassDescribe中，也就是所有公开的实例属性的内容会在同名函数中处理  */

    // 同名函数为类的构造函数，公开的实例属性通过构造器处理
    function ClassDescribe () {
        this.xxx = 'xxx' // 这里是构造器的作用域，
    }
    
    // 公开实例方法会被直接挂载在原型链上
    ClassDescribe.prototype.exampleMethod = function () {}
    
    // 私有属性与方法使用Object.defineProperty定义到ClassDescribe函数原型链上
    Object.defineProperty(ClassDescribe.prototype, 'fullName', {
        get: function () { return this.fullName},
        set: function (value) { this.__fullName = value;},
        enumerable: true,
        configurable: true
    })

    // 受保护部分暂时会被当作公开实例部分处理，由于TS做语法检测

    // 金泰属性直接放在ClassDescribe函数对象上
    ClassDescribe.staticAttribute = 'staticAttribute'

    return ClassDescribe
    /* ---------------------- ClassDescribe end ---------------------- */
})


/**
 * 继承的实现 extends 只完成数据的继承不完成实例的创建
 */
 var __extends = (this && this.__extends) || (function () {
     /**
      * @param d  子类 class
      * @param b  父类构造器 __super
      * @returns  子类实例
      */
    var extendStatics = function (d, b) {
        // 执行环境兼容处理 ES5不支持setPrototypeOf
        if (Object.setPrototypeOf || ({ __proto__: [] } instanceof Array)) {
            // 将子类的原型__proto__指向父类构造器
            extendStatics = function (d, b) { d.__proto__ = b;}
        } else {
            extendStatics = function (d, b) {
                // 将父类自身的数据传递给子类（即不包含继承过来的）
                for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        }
        
        // 语法解释 var a = 3 && 1; log: 1, 取最后计算的值即右值，var a = 1 || false; log 1; 取第一个真值 
        // ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        // function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

        // 递归调用，直到没有可继承的父类构造器，从而触发for...in错误推出递归
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b); // 完成数据继承
        function __() { this.constructor = d; } // this指向d，因为此时的d参数已经被改变，故而赋值d
        // 语法解释：表达式遇到运算符会先执行表达式进行求值，再进行运算
        // (__.prototype = b.prototype, new __()) 表达式自执行，
        // 同时经实验得出，js 引擎在通常情况下都会取最后进行运算的结果，
        // 如：console.log( (__.prototype = b.prototype, new __()) ) 结果为__实例
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __()); // 这里还不是很理解
    };
})();

