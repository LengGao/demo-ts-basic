// 由于Node早期采用commonJS模块化解决方案，在Node13*后需在package.json中打开type: module,配置，同时引入与导出文件需要带后最名
export * from './module2.js';
export * from './module3.js';
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
// export = ZipCodeValidator;
// "module": "CommonJS",
