### 이번에는 노드에서 간단한 모듈을 만들고 사용해 봅시다.
노드는 exports 라는 전역객체를 사용해서 모듈간의 import와 export 수단을 제공한다.  
즉 모듈화된 파일에 전역객체에 내가 만든 객체를 담는 것만으로 내 프로젝트 내부에서 이 모듈을 require를 통해서 가져다 쓸수 있게 됨  

- ex2-modules-clac.js 라는 모듈을 만들어 보자

```javascript
// 모듈을 export 할떈 export객체에 추가 해준다
var clac = {};

clac.add = function (a,b) {
  return a + b;
};

clac.multiply = function (a,b) {
  return a * b;
};

module.exports = clac;
```

- ex2-modules.js 라는 파일에서 해당 모듈을 불러와서 사용해 보자
```javascript
var clac = require('./ex2-modules-clac.js');

console.log(clac.add(1,2));      //3
console.log(clac.multiply(2,2)); //4
```

- 이제 터미널에 node examples/ex2-modules.js 를 입력하여 결과값을 확인해 보자.

### 내장모듈과 외장모듈
모듈을 직접 만들어 사용하는 방법 : 내장모듈  
다른 사람들이 만들어 놓은 외부 패키지를 설치 후 사용하는 방법 : 외장모듈  
- 내장 모듈에 대하서는 http://nodejs.org/api 를 참조

이번에 다룰 모듈은 os / path이다.

ex2-modules.js를 수정해 보자