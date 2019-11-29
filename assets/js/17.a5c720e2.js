(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{240:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"二进制和八进制表示法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二进制和八进制表示法"}},[a._v("#")]),a._v(" 二进制和八进制表示法")]),a._v(" "),e("hr"),a._v(" "),e("ul",[e("li",[a._v("ES6中提供了二进制和八进制的新写法，二进制以0b开头，八进制以0o开头")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("0b111110111 === 503 // true\n0o767 === 503 // true\n")])])]),e("ul",[e("li",[a._v("也可以使用Number方法将数值转化为十进制")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Number('0b111')  // 7\nNumber('0o10')  // 8\n")])])]),e("hr"),a._v(" "),e("h2",{attrs:{id:"number-isfinite-number-isnan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#number-isfinite-number-isnan"}},[a._v("#")]),a._v(" Number.isFinite(), Number.isNaN()")]),a._v(" "),e("hr"),a._v(" "),e("ul",[e("li",[a._v("这两个方法作为ES6新增的，前者用于验证数字是否有限，后者用于验证变量是否为NaN,且验证时都不进行强制类型转换。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Number.isFinite(15); // true\nNumber.isFinite(0.8); // true\nNumber.isFinite(NaN); // false\nNumber.isFinite(Infinity); // false\nNumber.isFinite(-Infinity); // false\nNumber.isFinite('foo'); // false\nNumber.isFinite('15'); // false\nNumber.isFinite(true); // false\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Number.isNaN(NaN) // true\nNumber.isNaN(15) // false\nNumber.isNaN('15') // false\nNumber.isNaN(true) // false\nNumber.isNaN(9/NaN) // true\nNumber.isNaN('true'/0) // true\nNumber.isNaN('true'/'true') // true\n")])])]),e("hr"),a._v(" "),e("h2",{attrs:{id:"number-parseint-number-parsefloat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#number-parseint-number-parsefloat"}},[a._v("#")]),a._v(" Number.parseInt(), Number.parseFloat()")]),a._v(" "),e("hr"),a._v(" "),e("ul",[e("li",[a._v("这两个方法由全局对象移植到Number对象上，行为完全不变，只是为了逐步实现语言模块化")])]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"number-isinteger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#number-isinteger"}},[a._v("#")]),a._v(" Number.isInteger()")]),a._v(" "),e("hr"),a._v(" "),e("ul",[e("li",[a._v("验证一个数是否为整数")])]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"number-epsilon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#number-epsilon"}},[a._v("#")]),a._v(" Number.EPSILON")]),a._v(" "),e("hr"),a._v(" "),e("ul",[e("li",[a._v("表示一个大于1的数与1做差的极小数约为2^-52")]),a._v(" "),e("li",[a._v("由于浮点数无法进行精确运算，所以该数可用于浮点数运算作比较。")])]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"安全整数和-number-issafeinteger-；"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全整数和-number-issafeinteger-；"}},[a._v("#")]),a._v(" 安全整数和 Number.isSafeInteger() ；")]),a._v(" "),e("hr"),a._v(" "),e("ul",[e("li",[a._v("安全整数指整数的范围在2^53~2^53之间的数（不包括端点）")]),a._v(" "),e("li",[a._v("这个函数是用来验证一个变量是否为安全整数")])]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"math对象的扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math对象的扩展"}},[a._v("#")]),a._v(" Math对象的扩展")]),a._v(" "),e("hr"),a._v(" "),e("h4",{attrs:{id:"math-trunc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math-trunc"}},[a._v("#")]),a._v(" Math.trunc();")]),a._v(" "),e("ul",[e("li",[a._v("用于去除小数位")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Math.trunc(4.1) // 4\nMath.trunc(4.9) // 4\nMath.trunc(-4.1) // -4\nMath.trunc(-4.9) // -4\nMath.trunc(-0.1234) // -0\n")])])]),e("h4",{attrs:{id:"math-sign"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math-sign"}},[a._v("#")]),a._v(" Math.sign()")]),a._v(" "),e("ul",[e("li",[a._v("用于判断数值符号\n"),e("ul",[e("li",[a._v("参数为正数，返回+1；")]),a._v(" "),e("li",[a._v("参数为负数，返回-1；")]),a._v(" "),e("li",[a._v("参数为0，返回0；")]),a._v(" "),e("li",[a._v("参数为-0，返回-0;")]),a._v(" "),e("li",[a._v("其他值，返回NaN。")])])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Math.sign(-5) // -1\nMath.sign(5) // +1\nMath.sign(0) // +0\nMath.sign(-0) // -0\nMath.sign(NaN) // NaN\n")])])]),e("h4",{attrs:{id:"math-cbrt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math-cbrt"}},[a._v("#")]),a._v(" Math.cbrt()")]),a._v(" "),e("ul",[e("li",[a._v("用于计算一个数的立方跟，非数字会进行强制类型转换")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Math.cbrt(-1) // -1\nMath.cbrt(0)  // 0\nMath.cbrt(1)  // 1\nMath.cbrt(2)  // 1.2599210498948734\n")])])]),e("h5",{attrs:{id:"math-clz32"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math-clz32"}},[a._v("#")]),a._v(" Math.clz32()")]),a._v(" "),e("ul",[e("li",[a._v("在JS中，整数以32为二进制表示，该函数返回数字的前导0的个数；")]),a._v(" "),e("li",[a._v("对于小数只考虑整数部分；")]),a._v(" "),e("li",[a._v("对于非整数，会先进行强制类型转换")])]),a._v(" "),e("h5",{attrs:{id:"math-imul"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math-imul"}},[a._v("#")]),a._v(" Math.imul()")]),a._v(" "),e("ul",[e("li",[a._v("在JS中，当两数之积超过2^53的时候，在低数位会发生不准确的现象，因此出现了该函数，该函数用于返回俩数的积，在运算较小数时，与运算符*并无异同。")])]),a._v(" "),e("h5",{attrs:{id:"math-fround"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math-fround"}},[a._v("#")]),a._v(" Math.fround()")]),a._v(" "),e("ul",[e("li",[a._v("返回一个数的单精度浮点数的值，对于整数返回结果与原数相同，区别主要是那些无法用64个二进制位精确表示的小数。这时，Math.fround方法会返回最接近这个小数的单精度浮点数。")])]),a._v(" "),e("h5",{attrs:{id:"math-hypot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math-hypot"}},[a._v("#")]),a._v(" Math.hypot()")]),a._v(" "),e("ul",[e("li",[a._v("返回所有参数平方和的平方根")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Math.hypot(3, 4);        // 5\nMath.hypot(3, 4, 5);     // 7.0710678118654755\nMath.hypot();            // 0\nMath.hypot(NaN);         // NaN\nMath.hypot(3, 4, 'foo'); // NaN\nMath.hypot(3, 4, '5');   // 7.0710678118654755\nMath.hypot(-3);          // 3\n")])])]),e("h5",{attrs:{id:"对数方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对数方法"}},[a._v("#")]),a._v(" 对数方法")]),a._v(" "),e("h6",{attrs:{id:"math-expm1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math-expm1"}},[a._v("#")]),a._v(" Math.expm1()")]),a._v(" "),e("ul",[e("li",[a._v("Math.expm1(x)返回e^x-1;")])]),a._v(" "),e("h6",{attrs:{id:"math-log1p"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math-log1p"}},[a._v("#")]),a._v(" Math.log1p()")]),a._v(" "),e("ul",[e("li",[a._v("Math.log1p(x)返回1+x的自然对数，若想x<-1,则返回NaN")])]),a._v(" "),e("h6",{attrs:{id:"math-log10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math-log10"}},[a._v("#")]),a._v(" Math.log10()")]),a._v(" "),e("ul",[e("li",[a._v("这个……")])]),a._v(" "),e("h6",{attrs:{id:"math-log2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math-log2"}},[a._v("#")]),a._v(" Math.log2()")]),a._v(" "),e("ul",[e("li",[a._v("这个也……")])]),a._v(" "),e("h5",{attrs:{id:"双曲函数方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双曲函数方法"}},[a._v("#")]),a._v(" 双曲函数方法")]),a._v(" "),e("ul",[e("li",[a._v("ES6新增了6个函数\n"),e("ul",[e("li",[a._v("Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）")]),a._v(" "),e("li",[a._v("Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）")]),a._v(" "),e("li",[a._v("Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）")]),a._v(" "),e("li",[a._v("Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）")]),a._v(" "),e("li",[a._v("Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）")]),a._v(" "),e("li",[a._v("Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）")]),a._v(" "),e("li",[a._v("高中数学差，都不懂……")])])])]),a._v(" "),e("h5",{attrs:{id:"指数运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指数运算符"}},[a._v("#")]),a._v(" 指数运算符")]),a._v(" "),e("ul",[e("li",[a._v("在ES2016中新增了（**）运算符")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let a = 1.5;\na **= 2;\n// 等同于 a = a * a;\n\nlet b = 4;\nb **= 3;\n// 等同于 b = b * b * b;\n")])])]),e("ul",[e("li",[a._v("注意，在 V8 引擎中，指数运算符与Math.pow的实现不相同，对于特别大的运算结果，两者会有细微的差异。")])]),a._v(" "),e("hr")])}),[],!1,null,null,null);t.default=s.exports}}]);