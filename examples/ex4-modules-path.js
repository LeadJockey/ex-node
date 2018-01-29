var path = require('path'); //https://nodejs.org/api/path.html

// 왜 path 모듈을 사용할까요?

// window vs POSIX  이 두가지 운영체제의 경로 시스템은 각각 다름

// 예를들면 'C:\\temp\\myfile.html' <- 이런식으로 경로를 지정하면 각각 다른 결과값이 나온다
// POSIX  결과 : C:\\temp\\myfile.html
// window 결과 : myfile.html

//Mac 확인해 봅시다
console.log(path.basename('C:\\temp\\myfile.html')); // C:\temp\myfile.html

//basename(경로[,ext]) : 파일 반환 (파일이름 + 확장자)

var testPath = 'user/javascript/node/join.html';
console.log(path.basename(testPath)); // join.html
////tip 디렉토리 구분 기호 무시 path.sep => "/"
console.log(testPath.split(path.sep)); // [ 'user', 'javascript', 'node', 'join.html' ]
console.log(path.basename(testPath,'.html')); // join

//path.dirname(path) : 파일 경로 반환
console.log(path.dirname(testPath)); //user/javascript/node

//path.extname(path) : 확장자명 반환
console.log(path.extname(testPath));

var dirname = path.dirname(testPath); //user/javascript/node
var extname = path.extname(testPath); //.html
var basename = path.basename(testPath,extname); //join
var newTestPath = dirname +"/"+ basename + extname; //user/javascript/node/join.html

//path.join([...paths])

var newTestPath2 = path.join(dirname, basename+extname); //user/javascript/node/join.html

console.log(testPath === newTestPath);
console.log(testPath === newTestPath2);

//path.format(pathObject)

//이번에는 path 객체를 통해서 경로들을 관리해 보자

var pathObject = {
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
};
var pathObject2 ={
  root: '/',
  base: 'file.txt',
  ext: 'ignored'
};
var pathObject3 = {
  root: '/',
  name: 'file',
  ext: '.txt'
};
console.log('pathObj  : ', path.format(pathObject));
console.log('pathObj2 : ', path.format(pathObject2));
console.log('pathObj3 : ', path.format(pathObject3));



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