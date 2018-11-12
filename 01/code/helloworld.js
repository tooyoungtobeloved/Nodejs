
//浏览器中的js没有操作文件的能力
var fs=require('fs');
//readFile
//第一个参数是要读的文件的路径
//第二个参数回调函数
//成功data：数据 err null
//失败data null  err错误对象
fs.readFile('./text.txt',function(Error,data){
  if(Error){
    console.log('can not read file of null');
    return;
  }
  console.log(data.toString())
})
