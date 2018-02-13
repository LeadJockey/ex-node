const EventEmitter = require('events').EventEmitter;
const util         = require('util');

const Calc         = function () {
  this.on('stop', () => {
    console.log('clac에 stop 이벤트 전달됨');
  });
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function (a, b) {
  return a + b;
};

module.exports     = Calc;
