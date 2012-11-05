/**
 * Created with JetBrains WebStorm.
 * User: lam
 * Date: 12-11-4
 * Time: 下午9:08
 * To change this template use File | Settings | File Templates.
 */
var ds = require('./datasource');
var this_col = 'user';
var db = ds.dataSouce();

exports.toLogin = function (req, res) {
  res.render('login',{err:null});
};

exports.login = function (req, res) {
  var logInfo = req.body;
  console.log('Receiving login info: ' + JSON.stringify(logInfo));
  db.collection(this_col, function (err, collection) {
    collection.findOne({'userName':logInfo.username,'passWord':logInfo.password}, function (err, item) {
      if(item)
        res.render('index',{err:null})
      else
        res.render('login',{err:'用户名或者密码错误!'});
    });
  });
};