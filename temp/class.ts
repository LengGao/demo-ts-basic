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
 * 继承的实现
 */

// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && 
//             function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { 
//                 for (var p in b) 
//                 if (Object.prototype.hasOwnProperty.call(b, p)) 
//                 d[p] = b[p]; 
//             };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         if (typeof b !== "function" && b !== null)
//             throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();