var fs=require('fs')
/*三个参数  第一个参数要写文件的路径。
第二个参数要写文件的内容
第三个参数回调函数
*/
fs.writeFile('./text.md','gogogo',function(error){
    console.log('file had been wirten');
})
var os=require('os')
console.log(os.totalmem()/1024/1024);