// generic paradigm 泛型
function identity(arg) {
    return arg;
}
function identity2(arg) {
    return arg;
}
function identity3(arg) {
    return arg;
}
function identity4(arg) {
    var s = String(arg);
    // arg = '' // error
    // arg = String(arg) // error
    return String(arg) || '';
}
identity4('s');
function identity5(arg) {
    var a;
    var b;
    // a = parseInt(arg) //error
    // Math.floor(arg) error
    // let c = <T>arg // error
    // return <any> // ok
    // return b // ok
    // return <T> // ok
    return a; // ok
}
identity5('s');
function identity6(arg) {
    // arg[1] = '' // error
    console.log(arg.length);
    return arg;
}
// 限制类型变量 必须包含length
function identity7(arg) {
    console.log(arg.length);
    return arg;
}
identity7('s');
// identity7(1) // error
function identity8(arg) {
    return arg;
}
function Generic(arg) {
    return arg;
}
Generic('a'); // 可借由类型推论省去泛型变量的输入
function Generic2(arg1, arg2) {
    // return arg1 + arg2
    return arg1;
}
Generic2(1, 2);
function Generic3(arg1) {
    return arg1;
}
// Generic3(1) // error
Generic3('s');
