(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{241:function(a,t,e){"use strict";e.r(t);var s=e(0),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),e("ul",[e("li",[a._v("在JavaScript中允许采用Unicode码点表示一个字符")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('"\\u0061"\n// "a"\n')])])]),e("ul",[e("li",[a._v("但是这个表示方法也只限于码点在\\u0000~\\uFFFF之间的，超出这个范围必须用双字节表示。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('"\\uD842\\uDFB7"\n// "𠮷"\n\n"\\u20BB7"\n// " 7"\n')])])]),e("ul",[e("li",[a._v("上面代码表示，如果直接在\\u后面跟上超过0xFFFF的数值（比如\\u20BB7），JavaScript会理解成\\u20BB+7。由于\\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。")]),a._v(" "),e("li",[a._v("在ES6中我们可以使用大括号来正确解读字符")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('"\\u{20BB7}"\n// "𠮷"\n\n"\\u{41}\\u{42}\\u{43}"\n// "ABC"\n\nlet hello = 123;\nhell\\u{6F} // 123\n\n\'\\u{1F680}\' === \'\\uD83D\\uDE80\'\n// true\n')])])]),e("h2",{attrs:{id:"codepointat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#codepointat"}},[a._v("#")]),a._v(" codePointAt")]),a._v(" "),e("ul",[e("li",[a._v("在Javascript内部，所有的字符都utf-16的格式存储，每个字符占用两字节，对于那些需要四个字节存储的字符，会被认为是两个字符")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var s = \"𠮷\";\n\ns.length // 2\ns.charAt(0) // ''\ns.charAt(1) // ''\ns.charCodeAt(0) // 55362\ns.charCodeAt(1) // 57271\n")])])]),e("ul",[e("li",[a._v("ES6提供了codePointAt的方法可以正确处理四个字节的字符")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var s = '𠮷a';\n\ns.codePointAt(0) // 134071\ns.codePointAt(1) // 57271\n\ns.codePointAt(2) // 97\n")])])]),e("ul",[e("li",[a._v("该函数对两个字节的字符与charCodeAt没有区别，处理四字节字符字节是可以正确解读，但是如上述代码，该方法的参数还是不正确，比如a的下标应该为2，此时最好的解决方法就是是用for...of循环。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var s = '𠮷a';\nfor (let ch of s) {\n  console.log(ch.codePointAt(0).toString(16));\n}\n// 20bb7\n// 61\n")])])]),e("h2",{attrs:{id:"string-fromcodepoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-fromcodepoint"}},[a._v("#")]),a._v(" String.fromCodePoint()")]),a._v(" "),e("ul",[e("li",[a._v("ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于0xFFFF）")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('String.fromCharCode(0x20BB7)\n// "ஷ"\n')])])]),e("ul",[e("li",[a._v("ES6提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("String.fromCodePoint(0x20BB7)\n// \"𠮷\"\nString.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\\uD83D\\uDE80y'\n// true\n")])])]),e("ul",[e("li",[a._v("注意，fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上。")])]),a._v(" "),e("h2",{attrs:{id:"字符串的遍历器接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串的遍历器接口"}},[a._v("#")]),a._v(" 字符串的遍历器接口")]),a._v(" "),e("ul",[e("li",[a._v("ES6为字符串新增了遍历器接口，该接口使得字符串可以使用for...of循环读取字符")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('for (let codePoint of \'foo\') {\n  console.log(codePoint)\n}\n// "f"\n// "o"\n// "o"\n')])])]),e("ul",[e("li",[a._v("除了遍历器字符串，这个接口最大的优点是可以处理大于\\uFFFF码点的字符")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('var text = String.fromCodePoint(0x20BB7);\n\nfor (let i = 0; i < text.length; i++) {\n  console.log(text[i]);\n}\n// " "\n// " "\n\nfor (let i of text) {\n  console.log(i);\n}\n// "𠮷"\n')])])]),e("h2",{attrs:{id:"includes-startswith-endswith"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#includes-startswith-endswith"}},[a._v("#")]),a._v(" includes(), startsWith(), endsWith()")]),a._v(" "),e("ul",[e("li",[a._v("定义\n"),e("ul",[e("li",[a._v("includes()：返回布尔值，表示是否找到了参数字符串。")]),a._v(" "),e("li",[a._v("startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。")]),a._v(" "),e("li",[a._v("endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾\n部。")])])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var s = 'Hello world!';\n\ns.startsWith('Hello') // true\ns.endsWith('!') // true\ns.includes('o') // true\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var s = 'Hello world!';\n\ns.startsWith('world', 6) // true\ns.endsWith('Hello', 5) // true\ns.includes('Hello', 6) // false\n")])])]),e("ul",[e("li",[a._v("第二个的参数n表示前n个参数")]),a._v(" "),e("li",[a._v("其他俩个参数n表示有第几个字符开始查找。")])]),a._v(" "),e("h2",{attrs:{id:"repeat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repeat"}},[a._v("#")]),a._v(" repeat()")]),a._v(" "),e("p",[a._v("repeat方法返回一个新字符串，其内容为原字符串的重复。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("'x'.repeat(3) // \"xxx\"\n'hello'.repeat(2) // \"hellohello\"\n'na'.repeat(0) // \"\"\n")])])]),e("h2",{attrs:{id:"padstart-，padend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#padstart-，padend"}},[a._v("#")]),a._v(" padStart()，padEnd()")]),a._v(" "),e("ul",[e("li",[a._v("这俩个函数用于补齐字符串，如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("'x'.padStart(5, 'ab') // 'ababx'\n'x'.padStart(4, 'ab') // 'abax'\n\n'x'.padEnd(5, 'ab') // 'xabab'\n'x'.padEnd(4, 'ab') // 'xaba'\n")])])]),e("ul",[e("li",[a._v("如果省略第二个参数，默认使用空格补全长度。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("'x'.padStart(4) // '   x'\n'x'.padEnd(4) // 'x   '\n")])])]),e("ul",[e("li",[a._v("padStart的常见用途是为数值补全指定位数。下面代码生成10位的数值字符串。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("'1'.padStart(10, '0') // \"0000000001\"\n'12'.padStart(10, '0') // \"0000000012\"\n'123456'.padStart(10, '0') // \"0000123456\"\n")])])]),e("ul",[e("li",[a._v("另一个用途是提示字符串格式")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("'12'.padStart(10, 'YYYY-MM-DD') // \"YYYY-MM-12\"\n'09-12'.padStart(10, 'YYYY-MM-DD') // \"YYYY-09-12\"\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);