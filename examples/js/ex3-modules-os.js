const os = require('os'); //https://nodejs.org/api/os.html

console.log('system host name : ', os.hostname()); //운영체제의 호스트 이름
console.log('system memory', os.freemem + "/" + os.totalmem()); //시스템의 전체 메모리 용량
//console.log(os.freemen());                                      //시스템의 사용가능한 메모리
console.log('cpu info : ', os.cpus());                             //cpu정보
console.log('return interface inside info', os.networkInterfaces());//네트워크 인터페이스 정보를 담은 배열 객체 반환