var http = require('http');

var port = 8000;

http.createServer(function (req,res) {
  console.log('server listening on port '+port);
  res.writeHead(200,{'Content-Type':'text/plain'}); // 클라이언트에게 보내줄 문서의 헤더정보
  res.end('HELLO WORLD!!'); // 보내줄 문서의 내용
}).listen(port);