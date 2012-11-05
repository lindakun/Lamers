
/**
 * Module dependencies.
 */

var express = require('express')
  , index = require('./routes/index')
  , user = require('./routes/user')
  , login = require('./routes/login')
  , http = require('http')
  , path = require('path')
  , config = require('./config');

var app = express();

app.configure(function () {
  app.set('port', config.site.port || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', config.site.viewEngine || 'jade');
  app.set('view options', { layout: false });
  //app.set("view engine", "html");
  //app.register("html", ejs);
  app.set("view cache", true); //上线开启模板缓存
  app.use(express.favicon());
  app.use(express.logger('dev'));/* 'default', 'short', 'tiny', 'dev' */
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(config.site.baseDir, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//配置服务的请求拦截路径
app.get('/', index.index);
app.get('/form', index.form);

app.get('/login', login.toLogin);
app.post('/loginAction', login.login);

app.get('/users', user.list);
app.get('/users/show', user.show);
app.post('/users/add', user.add);
app.get('/users/delete', user.delete);

//启动服务监听
http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});