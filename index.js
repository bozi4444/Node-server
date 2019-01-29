// 用于url不只是定位一个文件，而是用于获取任何数据，或者是moke一些数据，跟前端进行交互。
var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){
  console.log(__dirname,req.url);
  // 打印一下就知道路径了
 switch(req.url){
  case '/favicon.ico':
  break;
  case '/getWeather':
  res.end(JSON.stringify({a:1,b:2}))
//   如果req.url叫/getWeater，那么发送后面的，JSON.stringify送把json格式变成字符串。
  break;
  case '/user/123':
  res.end(fs.readFileSync(__dirname + '/static/user'))
//   匹配上后，读当前文件夹下的。。。当字符串读
  break;
  default:
  res.end(fs.readFileSync(__dirname + '/static' + req.url))
//   都没匹配上，就当是一个静态文件，直接从static下面去读，req.url是请求的地址。
  
 }
// 这switch整个函数返回的是server对象。
}).listen(1000)