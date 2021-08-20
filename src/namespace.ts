/// <reference path="./namespace1.ts" />
namespace Validation { }

// 起别名
import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // Same as "new Shapes.Polygons.Square()"
// 注意，我们并没有使用require关键字，而是直接使用导入符号的限定名赋值。 这与使用 var相似，
// 但它还适用于类型和导入的具有命名空间含义的符号。 重要的是，对于值来讲， 
// import会生成与原始符号不同的引用，所以改变别名的var值并不会影响原始变量的值
    


/**注意
 * 当涉及到多文件时，我们必须确保所有编译后的代码都被加载了。 我们有两种方式
 * 第一种方式，把所有的输入文件编译为一个输出文件，需要使用--outFile标记：
 * tsc --outFile sample.js（输出） Test.ts（输入）
 * 编译器会根据源码里的引用标签自动地对输出进行排序。你也可以单独地指定每个文件
 * tsc --outFile sample.js（输出） Validation.ts LettersOnlyValidator.ts ZipCodeValidator.ts Test.ts（输出后都为输入）
 * 第二种方式，我们可以编译每一个文件（默认方式），那么每个源文件都会对应生成一个JavaScript文件。 然后，在页面上通过 <script>标签把所有生成的JavaScript文件按正确的顺序引进来，比如：
 * <script src="Validation.js" type="text/javascript" />
 * <script src="LettersOnlyValidator.js" type="text/javascript" />
 */

/**结论
 * 结论1：在TS中，存在全局命名空间与局部命名空间，这就是为什么a文件A类声明会与b文件A类产生语法异常的原因
 * 结论2：在同一文件中，namespace块不会阻隔该文件下的命名空间，即在a件中不可以出现两个A声明
 * 结论3：通过使用引用标签可以使得编译器清楚多文件间命名空间之间的联系
 */