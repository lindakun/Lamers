/**
 * Created with JetBrains WebStorm.
 * User: lam
 * Date: 12-11-4
 * Time: 下午9:08
 * To change this template use File | Settings | File Templates.
 */
var db = require('./datasource_new').dataSouce();
var tables = require('./table_constant').tables();

exports.toLogin = function (req, res) {
  res.render('login', {err:null});
};

/*
 * 用户登陆
 *
 * */
exports.login = function (req, res) {
  var logInfo = req.body;
  console.info('Receiving login info: ' + JSON.stringify(logInfo));
  db.collection(tables.user).findOne({'userName':logInfo['username'], 'passWord':logInfo['password']}, function (err, result) {
    if (err) {
      console.error(err);
      res.render('login', {err:'登录时发生错误!'});
    }
    if (result)
      res.render('index', {err:null});
    else
      res.render('login', {err:'用户名或者密码错误!'});
  });
};

/*
 * 用户注册
 *
 * */
exports.register = function (req, res) {
  var regInfo = req.body;
  console.info('Receiving login info: ' + JSON.stringify(regInfo));
  db.collection(tables.user).insert({'userName':regInfo['username'], 'passWord':regInfo['password']}, function (err, result) {
    if (err) {
      console.error(err);
      res.render('index', {err:'注册时发生错误!'});
    }
    res.render('index', {err:null});
  });
};