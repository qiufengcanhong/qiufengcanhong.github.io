(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{239:function(a,e,t){"use strict";t.r(e);var s=t(0),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[a._v("#")]),a._v(" Set")]),a._v(" "),t("h2",{attrs:{id:"基本用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[a._v("#")]),a._v(" 基本用法")]),a._v(" "),t("ul",[t("li",[a._v("ES6提供了新的数据结构Set，与数组类似，最大的特点是没有重复值，成员是唯一的")]),a._v(" "),t("li",[a._v("Set可以直接当做构造函数使用")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const s = new Set();\n[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));\nfor (let i of s) {\n  console.log(i);\n}\n// 2 3 5 4\n")])])]),t("ul",[t("li",[a._v("Set构造函数可以接受一个数组作为构造函数")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const arr=[1,2,3,4,4,4,2,3];\nconst set=new Set(arr);\nfor(let e of set){\n  console.log(e);\n}\n//1 2 3 4\n")])])]),t("ul",[t("li",[a._v("对于set结构加入新值得时候，set不会对值进行强制类型转换，所以5！=“5”，规则与===类似，只是Set结构认为NAN===NAN，另外两个对象也总是不相等的")])]),a._v(" "),t("h2",{attrs:{id:"set的实例属性与方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set的实例属性与方法"}},[a._v("#")]),a._v(" Set的实例属性与方法")]),a._v(" "),t("ul",[t("li",[a._v("Set有一个size属性用来返回元素的个数")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const arr=[1,2,3,4,4,4,2,3];\nconst set=new Set(arr);\nalert(set.size);\n//4\n")])])]),t("ul",[t("li",[a._v("Set有四个操作方法add,delete,has,clear,这四个方法完全见文知意;")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const arr=[1,2,3,4,4,4,2,3];\nconst set=new Set(arr);\nset.add(5);\n//增加元素5，返回新的Set结构\nset.delete(1);\n//删除元素1，返回true，返回删除成功；\nset.has(2);\n//查找元素2，返回true，表示有这个元素;\nset.clear();\n//清空Set，不返回值\n")])])]),t("ul",[t("li",[a._v("Array.from可以将Set结构转化为数组")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const set=new Set([1,2,3,4,4,4,2,3]);\nconsole.log(Array.from(set));\n//[1,2,3,4];\n")])])]),t("ul",[t("li",[a._v("因此Set结构可用于数组去重")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const arr=[1,2,3,4,4,4,2,3];\nconsole.log([...new Set(arr)]);\n")])])]),t("ul",[t("li",[a._v("Set也有四个遍历方法keys,values,entries,foreach")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const arr=[1,2,3,4,4,4,2,3];\nconst set=new Set(arr);\nconsole.log(set.keys());\n//返回键名\nconsole.log(set.values());\n//返回键值\nconsole.log(set.entries());\n//返回键值对\n//由于Set结构只有值，没有键，所以keys和values的返回值都是一样的，返回的都属于键值对对象\n")])])]),t("ul",[t("li",[a._v("foreach()方法与数组的使用方法完全一样")])]),a._v(" "),t("h2",{attrs:{id:"weakset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weakset"}},[a._v("#")]),a._v(" weakSet")]),a._v(" "),t("ul",[t("li",[a._v("weakSet是一种比较特殊的Set，首先它的元素只能是对象，其次它的内部元素都是弱引用，也就是说js的垃圾回收机制在垃圾回收时是不会考虑其中的对象的，比较危险，但从另一个角度来考虑，可以使用weakSet存储DOM节点进行操作，不用担心内存泄露，而且也是在实例中使用，所以不用考虑内存回收的危险。")]),a._v(" "),t("li",[a._v("该数据结构的用法与Set基本一样，但是没有size属性和foreach方法")])]),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[a._v("#")]),a._v(" map")]),a._v(" "),t("h2",{attrs:{id:"基本用法-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本用法-2"}},[a._v("#")]),a._v(" 基本用法")]),a._v(" "),t("ul",[t("li",[a._v("javascript的对象本质上是键值对的集合（hash结构），但是object的局限在与它的键只可以是字符串，因此map结构出现了，它类似与object，但是它的键可以为任意值")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const m = new Map();\nconst o = {p: 'Hello World'};\nm.set(o, 'content')\nm.get(o) // \"content\"\nm.has(o) // true\nm.delete(o) // true\nm.has(o) // false\n")])])]),t("ul",[t("li",[a._v("Map构造函数接受数组作为参数，实际上执行的是")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const items = [\n  ['name', '张三'],\n  ['title', 'Author']\n];\nconst map = new Map();\nitems.forEach(\n  ([key, value]) => map.set(key, value)\n);\n")])])]),t("ul",[t("li",[a._v("事实上任何一个具有iterator接口的，且每个元素都是双元素数组的结构都可以作为参数，也就是说Map和Set都可以作为产生新map的参数")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const set = new Set([\n  ['foo', 1],\n  ['bar', 2]\n]);\nconst m1 = new Map(set);\nm1.get('foo') // 1\nconst m2 = new Map([['baz', 3]]);\nconst m3 = new Map(m2);\nm3.get('baz') // 3\n")])])]),t("ul",[t("li",[a._v("如果对一个键多次赋值，那么后面的值会覆盖前面的值")]),a._v(" "),t("li",[a._v("读取未知值返回undefined")]),a._v(" "),t("li",[a._v("值得注意的是只有对同一个值的引用，Map才将其看做相等的值")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const map = new Map();\nconst k1 = ['a'];\nconst k2 = ['a'];\nmap\n.set(k1, 111)\n.set(k2, 222);\nmap.get(k1) // 111\nmap.get(k2) // 222\n")])])]),t("ul",[t("li",[a._v("当键为简单数据类型的时候，只需严格相等Map便将其看做相等的，所以true不等于“true”,null不等于ubdefined,但是比较傻逼的是NAN等于NAN")])]),a._v(" "),t("h2",{attrs:{id:"实例的属性和方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例的属性和方法"}},[a._v("#")]),a._v(" 实例的属性和方法")]),a._v(" "),t("ol",[t("li",[a._v("size")])]),a._v(" "),t("ul",[t("li",[a._v("返回属性的数量")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const map = new Map();\nmap.set('foo', true);\nmap.set('bar', false);\nmap.size // 2\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("set(key, value)")])]),a._v(" "),t("ul",[t("li",[a._v("set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const m = new Map();\nm.set('edition', 6)        // 键是字符串\nm.set(262, 'standard')     // 键是数值\nm.set(undefined, 'nah')    // 键是 undefined\n")])])]),t("ul",[t("li",[a._v("set方法返回的是当前的map对象，因此可以采用链式写法")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let map = new Map()\n  .set(1, 'a')\n  .set(2, 'b')\n  .set(3, 'c');\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("get(key)")])]),a._v(" "),t("ul",[t("li",[a._v("get方法读取key对应的键值，如果找不到key，返回undefined。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const m = new Map();\nconst hello = function() {console.log('hello');};\nm.set(hello, 'Hello ES6!') // 键是函数\nm.get(hello)  // Hello ES6!\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("has(key)")])]),a._v(" "),t("ul",[t("li",[a._v("has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const m = new Map();\n\nm.set('edition', 6);\nm.set(262, 'standard');\nm.set(undefined, 'nah');\n\nm.has('edition')     // true\nm.has('years')       // false\nm.has(262)           // true\nm.has(undefined)     // true\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[a._v("delete(key)")])]),a._v(" "),t("ul",[t("li",[a._v("delete方法删除某个键，返回true。如果删除失败，返回false。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const m = new Map();\nm.set(undefined, 'nah');\nm.has(undefined)     // true\n\nm.delete(undefined)\nm.has(undefined)       // false\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[a._v("clear()")])]),a._v(" "),t("ul",[t("li",[a._v("clear方法清除所有成员，没有返回值。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let map = new Map();\nmap.set('foo', true);\nmap.set('bar', false);\n\nmap.size // 2\nmap.clear()\nmap.size // 0\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[a._v("keys()")])]),a._v(" "),t("ul",[t("li",[a._v("返回键名的遍历器。")])]),a._v(" "),t("ol",{attrs:{start:"8"}},[t("li",[a._v("values()")])]),a._v(" "),t("ul",[t("li",[a._v("返回键值的遍历器。")])]),a._v(" "),t("ol",{attrs:{start:"9"}},[t("li",[a._v("entries()")])]),a._v(" "),t("ul",[t("li",[a._v("返回所有成员的遍历器。")])]),a._v(" "),t("ol",{attrs:{start:"10"}},[t("li",[a._v("forEach()")])]),a._v(" "),t("ul",[t("li",[a._v("遍历 Map 的所有成员。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('const map = new Map([\n  [\'F\', \'no\'],\n  [\'T\',  \'yes\'],\n]);\n\nfor (let key of map.keys()) {\n  console.log(key);\n}\n// "F"\n// "T"\n\nfor (let value of map.values()) {\n  console.log(value);\n}\n// "no"\n// "yes"\n\nfor (let item of map.entries()) {\n  console.log(item[0], item[1]);\n}\n// "F" "no"\n// "T" "yes"\n\n// 或者\nfor (let [key, value] of map.entries()) {\n  console.log(key, value);\n}\n// "F" "no"\n// "T" "yes"\n\n// 等同于使用map.entries()\nfor (let [key, value] of map) {\n  console.log(key, value);\n}\n// "F" "no"\n// "T" "yes"\n')])])]),t("ul",[t("li",[a._v("map结构的默认遍历方法是entries;")])]),a._v(" "),t("h2",{attrs:{id:"与其他数据结构的相互转化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与其他数据结构的相互转化"}},[a._v("#")]),a._v(" 与其他数据结构的相互转化")]),a._v(" "),t("h4",{attrs:{id:"map-转为数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map-转为数组"}},[a._v("#")]),a._v(" Map 转为数组")]),a._v(" "),t("ul",[t("li",[a._v("使用扩展运算符")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const myMap = new Map()\n  .set(true, 7)\n  .set({foo: 3}, ['abc']);\n[...myMap]\n// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]\n")])])]),t("h4",{attrs:{id:"map-转为数组-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map-转为数组-2"}},[a._v("#")]),a._v(" Map 转为数组")]),a._v(" "),t("ul",[t("li",[a._v("将数组传入 Map 构造函数，就可以转为 Map。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("new Map([\n  [true, 7],\n  [{foo: 3}, ['abc']]\n])\n// Map {\n//   true => 7,\n//   Object {foo: 3} => ['abc']\n// }\n")])])]),t("h4",{attrs:{id:"map-转为对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map-转为对象"}},[a._v("#")]),a._v(" Map 转为对象")]),a._v(" "),t("ul",[t("li",[a._v("当键全部为字符串的时候可以转换为Map")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function strMapToObj(strMap) {\n  let obj = Object.create(null);\n  for (let [k,v] of strMap) {\n    obj[k] = v;\n  }\n  return obj;\n}\n\nconst myMap = new Map()\n  .set('yes', true)\n  .set('no', false);\nstrMapToObj(myMap)\n// { yes: true, no: false }\n")])])]),t("h4",{attrs:{id:"对象转为-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象转为-map"}},[a._v("#")]),a._v(" 对象转为 Map")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('function objToStrMap(obj) {\n  let strMap = new Map();\n  for (let k of Object.keys(obj)) {\n    strMap.set(k, obj[k]);\n  }\n  return strMap;\n}\nobjToStrMap({yes: true, no: false})\n// Map {"yes" => true, "no" => false}\n')])])]),t("h4",{attrs:{id:"map-转为-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map-转为-json"}},[a._v("#")]),a._v(" Map 转为 JSON")]),a._v(" "),t("ul",[t("li",[a._v("Map 转为 JSON 要区分两种情况。一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function strMapToJson(strMap) {\n  return JSON.stringify(strMapToObj(strMap));\n}\n\nlet myMap = new Map().set('yes', true).set('no', false);\nstrMapToJson(myMap)\n// '{\"yes\":true,\"no\":false}'\n")])])]),t("ul",[t("li",[a._v("另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function mapToArrayJson(map) {\n  return JSON.stringify([...map]);\n}\n\nlet myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);\nmapToArrayJson(myMap)\n// '[[true,7],[{\"foo\":3},[\"abc\"]]]'\n")])])]),t("h4",{attrs:{id:"json-转为-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-转为-map"}},[a._v("#")]),a._v(" JSON 转为 Map")]),a._v(" "),t("ul",[t("li",[a._v("正常情况下，健名全部为字符串")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function jsonToStrMap(jsonStr) {\n  return objToStrMap(JSON.parse(jsonStr));\n}\n\njsonToStrMap('{\"yes\": true, \"no\": false}')\n// Map {'yes' => true, 'no' => false}\n")])])]),t("h2",{attrs:{id:"weakmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weakmap"}},[a._v("#")]),a._v(" WeakMap")]),a._v(" "),t("ul",[t("li",[a._v("WeakMap只接受对象作为键名，其他，参考WeakMap......")])])])}),[],!1,null,null,null);e.default=n.exports}}]);