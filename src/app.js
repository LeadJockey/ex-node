const express      = require('express');
const app          = express();
const path         = require('path');
const config       = require('./config');
const router       = require('./routes');
const logger       = require('./log');
const tester       = require('./test');
//const bodyParser   = require('body-parser');
const expressHbs   = require('express-handlebars');
//const errorHandler = require('express-error-handler');

const viewPath = path.join(__dirname, 'views');

//엔진 설정
app.engine('.hbs', expressHbs(config.view_engine));

//속성 설정
app.set('port', config.server_port || 3000);
app.set('views', path.join(viewPath));
app.set('view engine', '.hbs');

//미들웨어 설정
//app.use(bodyParser.json()); // for parsing application/json - test 중
//app.use(bodyParser.urlencoded(config.body_parser)); // for parsing application x-www-form-urlencoded - test 중
app.use(logger);
app.use(tester);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'public')));

//라우트 설정
router.load('/', app, config.route_schemas);

//에러 핸들러
//app.use(errorHandler.httpError(404,`뭔가 보여드리고 싶은게 있었는데.. 지금은 찾을 수 없네요. 잠시 후 다시 시도해 주세요;`));
//app.use( errHandler );


//서버 설정
app.listen(app.get('port'), () => console.log('server listening on port' + app.get('port')));

module.exports = app;



