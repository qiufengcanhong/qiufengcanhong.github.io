(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{211:function(a,t,e){"use strict";e.r(t);var n=e(0),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"数组的解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组的解构赋值"}},[a._v("#")]),a._v(" 数组的解构赋值")]),a._v(" "),e("h3",{attrs:{id:"基本用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[a._v("#")]),a._v(" 基本用法")]),a._v(" "),e("ul",[e("li",[a._v("在ES5中我们为数组赋值只能直接对其指定值如：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var a=1;\nvar b=2;\nvar c=3;\n")])])]),e("ul",[e("li",[a._v("在ES6中，我们用于使用某种方法从指定的数据结构中直接读出它的元素值。像下面这样：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let [a, b, c] = [1, 2, 3];\n")])])]),e("ul",[e("li",[a._v("这种方法类似于“模式匹配”，在数组中表现为按位置匹配，当然也可以嵌套匹配")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('let [foo, [[bar], baz]] = [1, [[2], 3]];\nfoo // 1\nbar // 2\nbaz // 3\n\nlet [ , , third] = ["foo", "bar", "baz"];\nthird // "baz"\n\nlet [x, , y] = [1, 2, 3];\nx // 1\ny // 3\n\nlet [head, ...tail] = [1, 2, 3, 4];//...表示浅复制\nhead // 1\ntail // [2, 3, 4]\n\nlet [x, y, ...z] = [\'a\'];\nx // "a"\ny // undefined\nz // []\n')])])]),e("ul",[e("li",[a._v("如果解构不成功，则赋值为undefined。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let [foo]=[];\nlet [bar,third]=['shuai'];\nconsole.log(foo);//undefined\nconsole.log(bar);//shuai\nconsole.log(third);//undefined\n")])])]),e("ul",[e("li",[a._v("还有一种情况就是左边只可以匹配右边数组内得一部分值，这样也是可以结构成功的")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let [x, y] = [1, 2, 3];\nx // 1\ny // 2\n\nlet [a, [b], d] = [1, [2, 3], 4];\na // 1\nb // 2\nd // 4\n")])])]),e("ul",[e("li",[a._v("如果右边不是数组（或者说可遍历结构），那么就会报错。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 报错\nlet [foo] = 1;\nlet [foo] = false;\nlet [foo] = NaN;\nlet [foo] = undefined;\nlet [foo] = null;\nlet [foo] = {};\n")])])]),e("ul",[e("li",[a._v("上面的语句都会报错，因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），要么本身就不具备 Iterator 接口（最后一个表达式）。")])]),a._v(" "),e("h3",{attrs:{id:"默认赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#默认赋值"}},[a._v("#")]),a._v(" 默认赋值")]),a._v(" "),e("ul",[e("li",[a._v("解构赋值允许指定默认值。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let [foo = true] = [];\nfoo // true\n\nlet [x, y = 'b'] = ['a']; // x='a', y='b'\nlet [x, y = 'b'] = ['a', undefined]; // x='a', y='b'\n")])])]),e("ul",[e("li",[a._v("值得注意的是在ES6内部使用严格相等的比较方式判断是否使用默认值，若变量结构严格相等于undefined则使用默认值。")]),a._v(" "),e("li",[a._v("使用默认值时不可以使用未定义的变量。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let [x = 1, y = x] = [];     // x=1; y=1\nlet [x = 1, y = x] = [2];    // x=2; y=2\nlet [x = 1, y = x] = [1, 2]; // x=1; y=2\nlet [x = y, y = 1] = [];     // ReferenceError\n")])])]),e("ul",[e("li",[a._v("上面最后一个表达式之所以会报错，是因为x用到默认值y时，y还没有声明。")])]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"对象的解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象的解构赋值"}},[a._v("#")]),a._v(" 对象的解构赋值")]),a._v(" "),e("ul",[e("li",[a._v("对象的解构赋值与数组不同，数组按下标匹配，而对象按属性名匹配，变量必须与属性同名，才能取到正确的值。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('let { foo, bar } = { foo: "aaa", bar: "bbb" };\nfoo // "aaa"\nbar // "bbb"\n')])])]),e("p",[a._v("如果变量名与属性名不同，必须写成下面这个样子")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var { foo: baz } = { foo: 'aaa', bar: 'bbb' };\nbaz // \"aaa\"\n\nlet obj = { first: 'hello', last: 'world' };\nlet { first: f, last: l } = obj;\nf // 'hello'\nl // 'world'\n")])])]),e("ul",[e("li",[a._v("上述代码说明对象的结构赋值实现按照属性名找到对象中的属性，然后再把该属性赋值给对于的变量，赋值的是变量，而不是属性名。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('let { foo: baz } = { foo: "aaa", bar: "bbb" };\nbaz // "aaa"\nfoo // error: foo is not defined\n')])])]),e("ul",[e("li",[a._v("上述代码中foo是匹配模式，baz才是变量名")]),a._v(" "),e("li",[a._v("与数组一样，对象也可以嵌套解构赋值")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var node = {\n  loc: {\n    start: {\n      line: 1,\n      column: 5\n    }\n  }\n};\n\nvar { loc, loc: { start }, loc: { start: { line }} } = node;\nline // 1\nloc  // Object {start: Object}\nstart // Object {line: 1, column: 5}\n")])])]),e("ul",[e("li",[a._v("上述代码进行了三次解构赋值，为loc，start，line")]),a._v(" "),e("li",[a._v("对象的解构赋值也可以使用默认值")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var {x = 3} = {};\nx // 3\n\nvar {x, y = 5} = {x: 1};\nx // 1\ny // 5\n\nvar {x: y = 3} = {};\ny // 3\n\nvar {x: y = 3} = {x: 5};\ny // 5\n\nvar { message: msg = 'Something went wrong' } = {};\nmsg // \"Something went wrong\"\n")])])]),e("ul",[e("li",[a._v("默认值生效的条件是匹配到的属性严格等于undefined")]),a._v(" "),e("li",[a._v("如果解构失败，将赋值undefined")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("et {foo} = {bar: 'baz'};\nfoo // undefined\n")])])]),e("ul",[e("li",[a._v("如果结构模式是嵌套的对象，而子对象的父属性不存在，则抛出错误")]),a._v(" "),e("li",[a._v("对于未声明的变量解构时需特别小心")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let x;\n{x} = {x: 1};\n// SyntaxError: syntax error\n")])])]),e("ul",[e("li",[a._v("上述代码会报错的原因是在ES6中会把所有行首的{}看做块级作用域，因此我们可以为该段代码加上（）")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let x;\n({x} = {x: 1});\n")])])]),e("ul",[e("li",[a._v("解构赋值也可以在左边的大括号内不放置任何东西，当然这么做很杀，而且没卵用")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("({} = [true, false]);\n({} = 'abc');\n({} = []);\n")])])]),e("ul",[e("li",[a._v("由于数组本身也是特殊的对象，因此对数组也可以进行解构赋值")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let arr = [1, 2, 3];\nlet {0 : first, [arr.length - 1] : last} = arr;\nfirst // 1\nlast // 3\n")])])]),e("h2",{attrs:{id:"字符串的解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串的解构赋值"}},[a._v("#")]),a._v(" 字符串的解构赋值")]),a._v(" "),e("ul",[e("li",[a._v("字符串可以解构赋值，因为此时字符串被解构成了一种类似数组的对象")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('const [a, b, c, d, e] = \'hello\';\na // "h"\nb // "e"\nc // "l"\nd // "l"\ne // "o"\n')])])]),e("ul",[e("li",[a._v("该对象还有一个length属性")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let {length:len}='hello';\nlen // 5\n")])])]),e("h2",{attrs:{id:"数值和布尔的解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数值和布尔的解构赋值"}},[a._v("#")]),a._v(" 数值和布尔的解构赋值")]),a._v(" "),e("ul",[e("li",[a._v("解构赋值时，如果等号右边是数字或者布尔型则会先转为对象在进行赋值")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let {toString: s} = 123;\ns === Number.prototype.toString // true\n\nlet {toString: s} = true;\ns === Boolean.prototype.toString // true\n")])])]),e("ul",[e("li",[a._v("解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let { prop: x } = undefined; // TypeError\nlet { prop: y } = null; // TypeError\n")])])]),e("h2",{attrs:{id:"函数参数的解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数参数的解构赋值"}},[a._v("#")]),a._v(" 函数参数的解构赋值")]),a._v(" "),e("ul",[e("li",[a._v("在ES6中函数参数也可以使用解构赋值。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function add([x, y]){\n  return x + y;\n}\n\nadd([1, 2]); // 3\n")])])]),e("ul",[e("li",[a._v("上述代码在[x,y]传入的那一刻对变量x,y进行结构")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[[1, 2], [3, 4]].map(([a, b]) => a + b);\n// [ 3, 7 ]\n")])])]),e("ul",[e("li",[a._v("函数参数解构赋值时也可以使用默认值")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function move({x = 0, y = 0} = {}) {\n  return [x, y];\n}\n\nmove({x: 3, y: 8}); // [3, 8]\nmove({x: 3}); // [3, 0]\nmove({}); // [0, 0]\nmove(); // [0, 0]\n")])])]),e("h2",{attrs:{id:"圆括号的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#圆括号的问题"}},[a._v("#")]),a._v(" 圆括号的问题")]),a._v(" "),e("ul",[e("li",[a._v("解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。")]),a._v(" "),e("li",[a._v("由此带来的问题是，如果模式中出现圆括号怎么处理。ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。")]),a._v(" "),e("li",[a._v("但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。")])]),a._v(" "),e("h3",{attrs:{id:"不能使用圆括号的情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不能使用圆括号的情况"}},[a._v("#")]),a._v(" 不能使用圆括号的情况")]),a._v(" "),e("ol",[e("li",[a._v("变量声明语句")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 全部报错\nlet [(a)] = [1];\n\nlet {x: (c)} = {};\nlet ({x: c}) = {};\nlet {(x: c)} = {};\nlet {(x): c} = {};\n\nlet { o: ({ p: p }) } = { o: { p: 2 } };\n")])])]),e("p",[a._v("2.函数参数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 报错\nfunction f([(z)]) { return z; }\n// 报错\nfunction f([z,(x)]) { return x; }\n")])])]),e("p",[a._v("3.赋值语句模式\n// 全部报错")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("({ p: a }) = { p: 42 };\n([a]) = [5];\n")])])]),e("ul",[e("li",[a._v("上述代码将整个模式放在圆括号里将导致报错")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 报错\n[({ p: a }), { x: c }] = [{}, {}];\n")])])]),e("ul",[e("li",[a._v("上述代码将部分模式放在圆括号里也将导致报错")])]),a._v(" "),e("h3",{attrs:{id:"可以使用圆括号的情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可以使用圆括号的情况"}},[a._v("#")]),a._v(" 可以使用圆括号的情况")]),a._v(" "),e("ul",[e("li",[a._v("只有一种情况，就是赋值语句的非模式部分可已使用圆括号")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[(b)] = [3]; // 正确\n({ p: (d) } = {}); // 正确\n[(parseInt.prop)] = [3]; // 正确\n")])])]),e("h2",{attrs:{id:"用途"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[a._v("#")]),a._v(" 用途")]),a._v(" "),e("p",[a._v("1.变量交换值")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let x = 1;\nlet y = 2;\n\n[x, y] = [y, x];\n")])])]),e("p",[a._v("2.从函数返回多个值")]),a._v(" "),e("ul",[e("li",[a._v("函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 返回一个数组\n\nfunction example() {\n  return [1, 2, 3];\n}\nlet [a, b, c] = example();\n\n// 返回一个对象\n\nfunction example() {\n  return {\n    foo: 1,\n    bar: 2\n  };\n}\nlet { foo, bar } = example();\n")])])]),e("p",[a._v("3.函数参数的定义")]),a._v(" "),e("ul",[e("li",[a._v("解构赋值可以很容易的将一组值与参数对应起来")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 参数是一组有次序的值\nfunction f([x, y, z]) { ... }\nf([1, 2, 3]);\n\n// 参数是一组无次序的值\nfunction f({x, y, z}) { ... }\nf({z: 3, y: 2, x: 1});\n")])])]),e("p",[a._v("4.提取json数据尤其有用")]),a._v(" "),e("ul",[e("li",[a._v("解构赋值对提取json对象中的值尤其有用")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('let jsonData = {\n  id: 42,\n  status: "OK",\n  data: [867, 5309]\n};\n\nlet { id, status, data: number } = jsonData;\n\nconsole.log(id, status, number);\n// 42, "OK", [867, 5309]\n')])])]),e("p",[a._v("5.函数参数的默认值")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("jQuery.ajax = function (url, {\n  async = true,\n  beforeSend = function () {},\n  cache = true,\n  complete = function () {},\n  crossDomain = false,\n  global = true,\n  // ... more config\n}) {\n  // ... do stuff\n};\n")])])]),e("p",[a._v("6.遍历map解构")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var map = new Map();\nmap.set('first', 'hello');\nmap.set('second', 'world');\n\nfor (let [key, value] of map) {\n  console.log(key + \" is \" + value);\n}\n// first is hello\n// second is world\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 获取键名\nfor (let [key] of map) {\n  // ...\n}\n\n// 获取键值\nfor (let [,value] of map) {\n  // ...\n}\n")])])]),e("p",[a._v("7.输入模块的指定方法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('const { SourceMapConsumer, SourceNode } = require("source-map");\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);