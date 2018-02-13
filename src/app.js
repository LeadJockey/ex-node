const express    = require('express');
const app        = express();
const path       = require('path');
const config     = require('./config');
const router     = require('./routes');
const logger     = require('./log');
const tester     = require('./test');
const expressHbs = require('express-handlebars');
const viewPath   = path.join(__dirname, 'views');

//엔진 설정
app.engine('.hbs', expressHbs({
  defaultLayout: 'index',
  extname      : '.hbs',
  layoutsDir   : path.join(viewPath, 'layouts'),
  partialsDir  : path.join(viewPath, 'partials')
}));

//속성 설정
app.set('port', config.server_port || 3000);
app.set('views', path.join(viewPath));
app.set('view engine', '.hbs');

//미들웨어 설정
app.use(logger);
app.use(tester);

//스테틱 설정
app.use('/static', express.static(path.join(__dirname, 'public')));

//라우트 설정
//console.log(config['route_schemas']);
router.load('/', app, config['route_schemas']);

//서버 설정
app.listen(app.get('port'), () => console.log('server listening on port' + app.get('port')));

module.exports = app;



