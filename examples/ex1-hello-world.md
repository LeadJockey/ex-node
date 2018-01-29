### 간단한 노드 서버를 만들어서 hello world 찍어봅시다.
| 뭐든 시작은 hello world 아니것습니까... -by shawn.thecool

### 준비
```code
npm init      -- package.json 생성
npm i express -- node_modules 생성
```
### 우선 import 하는 방법을 알아보죠  
노드에서는 서버와 클라이언트간의 request / response 를 처리할수 있는 모듈을 제공합니다.  
```javascript
var http = require('http'); // 노드에서 모듈의 import는 이러한 형식으로 이루어 집니다 require(모듈이름)
```
## 서버생성
```javascript
var port = 8000;  

http.createServer(function(req, res) {
    console.log('server listening on port '+port);
}).listen(port);
```

### package.json에서 시작 root 정해주기
scripts 하단에 시작 명령어를 기입하도록 하자 터미널에 node + 프로젝트 root로 부터 경로를 기입
```json
  "scripts": {
    "start": "node examples/ex1-hello-world.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
브라우저에서 localhost:8000 으로 접속했을떄 터미널에 "server listening on port 8000" 라고 뜬다면 성공!  
하지만 브러우저에서는 페이지가 뜬다고 하지 않을 것이다.  
이유는 사용자가 localhost:8000으로 접속하여서 서버에 req를 준 샘인데, 아직 우리는 서버에게 어떠한 반응도 입력하지 않았기 때문

### request에 따른 response 입력 바로 HELLO WORLD!!

```javascript
var port = 8000;  

http.createServer(function(req, res) {
    console.log('server listening on port '+port);
    res.writeHead(200,{'Content-Type':'text/plain'}); // 클라이언트에게 보내줄 문서의 헤더정보 
    res.end('HELLO WORLD!!');                         // 보내줄 문서의 내용
}).listen(port);
```
이렇게 해서 hello world까지 찍어 보았다.  
다음시간에는 노드에서 모듈을 사용하는 방법을 알아 보도록 하자.

### next()
| 이동 : [ex-node.examples.ex2-modules.md](https://github.com/LeadJockey/ex-node/blob/master/examples/ex2-modules.md)