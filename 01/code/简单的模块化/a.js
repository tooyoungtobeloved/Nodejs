//var foo='aaa'
console.log('a start')
//nodejs 里的模块有三种
//具名的核心模块 用户自己编写的模块 
//Node中没有全局作用域 只有模块作用域

//console.log(foo)
require('./b.js')
//require 有2个方法
//一 加载文件模块并执行
//二拿到被加载模块导出的接口对象exports

console.log('a end')
var c=require('./b')
console.log(c.foo)