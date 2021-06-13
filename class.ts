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
 */


