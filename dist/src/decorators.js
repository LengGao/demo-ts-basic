var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let Greeter2 = class Greeter2 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "hello, " + this.greeting;
    }
};
Greeter2 = __decorate([
    sealed
], Greeter2);
function sealed(constructor) {
    console.log("sealed");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
// 类修饰器
let Greeter3 = class Greeter3 {
    constructor(n) {
        this.property = "property";
        this.hello = n;
    }
};
Greeter3 = __decorate([
    classDecorator
], Greeter3);
function classDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.newProperty = "new property";
            this.hello = "override";
        }
    };
}
console.log(new Greeter3("world"));
// 方法修饰器
class Greeter4 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false)
], Greeter4.prototype, "greet", null);
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
console.log(new Greeter4('enumerable')); // greet调用时修改了enumerable属性
// 访问符修饰器
class Greeter5 {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() { return this._x; }
    get y() { return this._y; }
}
__decorate([
    configurable(false)
], Greeter5.prototype, "x", null);
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
// 属性装饰器
import "reflect-metadata";
class Greeter6 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}
__decorate([
    format("hello, %s")
], Greeter6.prototype, "greeting", void 0);
const formatMetadataKey = Symbol("format");
function format(formatString) {
    return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target, propertyKey) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
// 参数修饰器
class Greeter7 {
    constructor(message) {
        this.greeting = message;
    }
    greet(name) {
        return "hello " + name + ", " + this.greeting;
    }
}
__decorate([
    validate,
    __param(0, required)
], Greeter7.prototype, "greet", null);
const requiredMetadataKey = Symbol("required");
function required(target, propertyKey, parameterIndex) {
    let existingRequiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
function validate(target, propertyName, descriptor) {
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.");
                }
            }
        }
        return method.apply(this, arguments);
    };
}
// tsconfig添加 "emitDecoratorMetadata": true 配置
