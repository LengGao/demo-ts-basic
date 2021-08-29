// 由于Node早期采用commonJS模块化解决方案，在Node13*后需在package.json中打开type: module,配置，同时引入与导出文件需要带后最名
export * from './module2.js'
export * from './module3.js'

let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

// export = ZipCodeValidator;
// "module": "CommonJS",

/**模块解析模式
 * 共有两种可用的模块解析策略：Node和Classic。 你可以使用 --moduleResolution标记来指定使用哪种模块解析策略。
 * 若未指定，那么在使用了 --module AMD | System | ES2015时的默认值为Classic，其它情况时则为Node。
 */

// 模块解析模式 classic（默认，出于向后兼容而存在）

// node 模式

// typescript 模式


/**
 * {
 *  "compiletOptions": {
 *      "baseUrl": ".", // This must be specified if "paths" is
 *      "paths": {
 *          "jquery": "node_modules/jquery/dist/jquery" //此处映射是相对于"baseUrl"
 *      }
 *  }
 * }
 * 请注意"paths"是相对于"baseUrl"进行解析。 
 * 如果 "baseUrl"被设置成了除"."外的其它值，
 * 比如tsconfig.json所在的目录，那么映射必须要做相应的改变。 
 * 如果你在上例中设置了 "baseUrl": "./src"，
 * 那么jquery应该映射到"../node_modules/jquery/dist/jquery"
 */


