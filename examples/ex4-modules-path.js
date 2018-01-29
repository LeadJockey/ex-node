var path = require('path'); //https://nodejs.org/api/path.html

// 왜 path 모듈을 사용할까요?

// window vs POSIX  이 두가지 운영체제의 경로 시스템은 각각 다름

// 예를들면 'C:\\temp\\myfile.html' <- 이런식으로 경로를 지정하면 각각 다른 결과값이 나온다
// POSIX  결과 : C:\\temp\\myfile.html
// window 결과 : myfile.html

//Mac 확인해 봅시다
console.log(path.basename('C:\\temp\\myfile.html')); // C:\temp\myfile.html

//basename(경로[,ext]) : 마지막 부분을 잡아옵니다

var testPath = 'user/javascript/node/join.html';
console.log(path.basename(testPath)); // join.html
////tip 디렉토리 구분 기호 무시 path.sep => "/"
console.log(testPath.split(path.sep)); // [ 'user', 'javascript', 'node', 'join.html' ]
console.log(path.basename(testPath,'.html')); // join

//path.dirname(path) : 파일 경로들을 불러옵니다
console.log(path.dirname(testPath)); //user/javascript/node

//

//// tip : process 환경변수
//var ENV = process.env;
//console.log(ENV); //process 환경 변수들
//console.log(ENV.PATH); ///usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
////tip path.delimiter : 구분문자 => ":"
//console.log(ENV.PATH.split(path.delimiter)); //[ '/usr/local/bin', '/usr/bin', '/bin', '/usr/sbin', '/sbin' ]




//
//// merge dir name
//var directories = ['users','mike','docs'];
//console.log(path.sep); // "/"
//var docsDirectory = directories.join(path.sep); //sep으로
//console.log('doc dir :', docsDirectory);
//
//// merge dir name with file name
//var curPath = path.join('/User/mike','notedpad.exe');
//console.log(curPath);