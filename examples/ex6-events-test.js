const Calc = require('./ex6-events-Calc');

const calc1 = new Calc();

calc1.emit('stop');

console.log('Calc 에 stop 이벤트를 전달함!');
