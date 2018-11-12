//加载http核心模块
var http = require('http')
//返回server实例
var server = http.createServer();
//处理请求
var template = require('art-template')
var fs=require('fs')
server.on('request',function(req,res){
    console.log('server had offen request'+req.url)
    fs.readFile('./template.html',function(err,data){
        if(err){
           return console.log('404')
        }
    var ret = template.render(data.toString(),{
            mon:1,
            thue:2,
            fri:'libai3',
            sat:'libai6',
            sun:'libaitian'
        })
        res.end(ret)
    })
    })
//绑定端口号
server.listen(3000,function(){
    console.log('server start')
})