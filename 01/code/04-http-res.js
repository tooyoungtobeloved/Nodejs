//加载http核心模块
var http=require('http')
//返回server实例
var server = http.createServer();
//处理请求
var fs=require('fs')
server.on('request',function(req,res){
    console.log('server had offen request'+req.url)
    fs.readFile('./index.html',function(err,data){
        res.end(data)
    })
})
//response.write可以多次使用 但最后都需要end()来结束
 /*   switch(req.url){
        case'/':res.end('/');break;
        case'/index':;break;
        case'/register':res.end('/register');break;
        default:res.end('404 has not found')
    }
}*/
//绑定端口号
server.listen(3000,function(){
    console.log('server start')
})