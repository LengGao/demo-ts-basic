

@sealed
class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "hello, " + this.greeting
    }   
}

function sealed(constructor: Function) {
    console.log("sealed");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
// 类修饰器
@classDecorator
class Greeter3 {
    property = "property";
    hello: string;
    constructor(n: string) {
        this.hello = n;
    }
}
function classDecorator<T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}
console.log(new Greeter3("world"));
// 方法修饰器
class Greeter4 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @enumerable(false)
    greet() {
        return "hello, " + this.greeting
    }
}

function enumerable(value: boolean) {
     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
     }
}
console.log(new Greeter4('enumerable')); // greet调用时修改了enumerable属性
// 访问符修饰器
class Greeter5 {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    @configurable(false)
    get x() { return this._x; }
    get y() { return this._y; }
}
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    }
}
// 属性装饰器
import "reflect-metadata";
class Greeter6 {
 @format("hello, %s")
 greeting: string;
 constructor(message: string) {
     this.greeting = message;
 }
 greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
 }
}
const formatMetadataKey = Symbol("format");

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
// 参数修饰器
class Greeter7 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @validate
    greet(@required name: string) {
        return "hello " + name + ", " + this.greeting;
    }
}

const requiredMetadataKey = Symbol("required")

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || []
    existingRequiredParameters.push(parameterIndex)
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters ,target, propertyKey)
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let method = descriptor.value

    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName)
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters ) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.")
                }
            }
        }
        return method.apply(this, arguments)
    }
}

// tsconfig添加 "emitDecoratorMetadata": true 配置
