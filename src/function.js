// 函数完整类型定义：参数类型与返回值类型
var myAdd = function (x, y) { return x + y; };
/**
 * 在TS中，函数的参数同样被分为；必选参数、可选参数、默认参数、剩余参数几种类型，未设值的参数同样为void 0
 * 不过可选参数与默认参数有些异同；
 * 1，可选参数必须在必选参数后而默认参数不用，只是默认参数在必选参数时前需要传入占位符。
 * 2，默认参数是特殊的可选参数。可选参数与末尾的默认参数共享参数类型
 * 剩余参数会编译成以同剩余参数名同名的变量通过arguments遍历收集剩余参数
 */
function bildName(firstName, lastName) { return firstName + lastName; }
function bildName2(firstName, lastName) {
    if (firstName === void 0) { firstName = 'z'; }
    if (lastName === void 0) { lastName = 's'; }
    return firstName + lastName;
}
function bildName3(firstName, lastName) { return firstName + lastName; }
function bildName4(firstName) {
    var nextName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nextName[_i - 1] = arguments[_i];
    }
    return firstName + nextName.join(' ');
}
bildName('l', '');
bildName3('z');
bildName4('z', 's');
/**
function bildName4(firstName) {
    var nextName = [];
    for (var _i = 1; _i < arguments.length; _i++) { nextName[_i - 1] = arguments[_i]; }
    return firstName + nextName.join(' ');
}
*/
// tps: 1，顶级非方法调用this => window。2，箭头函数能保存函数创建时的 this值，而不是调用时的值。3，TS中箭头函数不会捕获this
// 关于this: TS提供了this类型检查配置项noImplicitThis: true
// 若this来自对象字面量里的函数表达式。 修改的方法是，提供一个显式的 this参数。 this参数是个假的参数，它出现在参数列表的最前面，否则会产生一个警告
// 但同时this: void会引起类型问题
// 针对第一类情况：this参数
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // return function () { 
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 }; // this.suits[pickedSuit]里的this的类型为any
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
var deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var uiElement = { addClickListener: function () { } };
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.info = 'test';
        this.onClickBack3 = function (e) { _this.info = e.type; };
    }
    Handler.prototype.onClickBack = function (e) { this.info = e.type; };
    Handler.prototype.onClickBack2 = function (e) { console.log('意味着不能使用this'); };
    return Handler;
}());
var hander = new Handler();
// uiElement.addClickListener(hander.onClickBack) error this's type is void
uiElement.addClickListener(hander.onClickBack2); // 不可使用this
uiElement.addClickListener(hander.onClickBack3);
/**上例解释：
 * 出于既想要this类型检测又希望其类型不仅为void的目的，利用箭头函数this不会被捕获实现，但会带来副作用
 * 缺点：每个 Handler对象都会创建一个箭头函数。而方法只会被创建一次，添加到 Handler的原型链上。它们在不同 Handler对象间是共享的
 * 原理：
 * onClickBack，onClickBack2 会被编译为：Handler.prototype.onClickBack = function (e) { console.log('意味着不能使用this'); };
 * onClickBack3 会被编译为：this.onClickBack3 = function (e) { _this.info = e.type; };
 */
/**打印结果
{
    info: "test"
    onClickBack: (e) => { this.info = e.type; }
    __proto__: {
        onClickBack：ƒ onClickBack()
        onClickBack2: f onClickBack2()
        constructor: class Handler
        __proto__: Object
    }
}
*/
/**函数的重载
 * JS由于没有函数签名而需要采用变通方法实现重载————arugments不同长度处理
 * TS从语法上帮助开发者实现更简洁的写法
 */
var User = /** @class */ (function () {
    function User(name, value) {
        this.name = name;
        this.value = value;
    }
    return User;
}());
var Data = /** @class */ (function () {
    function Data() {
        this.values = [];
    }
    Data.prototype.register = function (name, value) {
        if (name instanceof User) {
            this.values.push(name);
        }
        else {
            this.values.push(new User(name, value));
        }
    };
    return Data;
}());
function reverse(x) {
    return x.length;
}
console.log(reverse(1));
// 注意，reverse(x): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。
// 注意，TypeScript 会优先从最前面的函数定d义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面
