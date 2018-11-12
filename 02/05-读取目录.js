//加载http核心模块
var http = require('http')
//返回server实例
var server = http.createServer();
//处理请求
var template = require('art-template')
var fs=require('fs')
server.on('request',function(req,res){
    console.log('server had offen request'+req.url)
    fs.readdir('../',function(err,files){
        res.end(files.toString())
    })
})
server.listen(3000,function(){
    console.log('server start')
})