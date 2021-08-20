import * as module1 from './module1'
console.log("module1:", module1);


// export default 也可以是一个值
declare let $: 'Jquery'
export default $
// import zpi = require("./module1");
/**
 * export = 与 inport xx = require() 语法是针对 CommmoJS与AMD 而言
 * 需要开启配置"module": "CommonJS"
 */


