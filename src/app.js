const express     = require('express');
const path        = require('path');
const route_index = require('./routes/index');
const route_dev   = require('./routes/dev');
const app         = express();

//속성 설정
app.set('port', process.env.PORT || 3002);
//app.set('views', path.join(__dirname,'views'));
//app.set('view engine', '.hbs');


//미들웨어 설정
app.use((req, res, next) => {
  console.log('미들웨어 1');
  console.log(req.user = 1);
  next();
});

app.use((req, res, next) => {
  console.log('미들웨어 2');
  console.log(req.user = 2);
  next();
});

//미들웨어로 라우터 사용
app.use('/', route_index);
app.use('/dev', route_dev);


app.listen(app.get('port'), () => console.log('server listening on port' + app.get('port')));


module.exports = app;



