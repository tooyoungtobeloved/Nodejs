//1-加载http核心模块
var http=require('http')
//2-使用http.createServer()创建一个Web服务器
//返回一个server实例
var server = http.createServer();
//处理请求
server.on('request',function(){
    console.log('server had offen request')
})
//绑定端口号
server.listen(3000,function(){
    console.log('server start')
})