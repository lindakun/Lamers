/**
 * Created with JetBrains WebStorm.
 * User: lam
 * Date: 12-11-4
 * Time: 下午9:08
 * To change this template use File | Settings | File Templates.
 */
var mongo = require('mongodb'),
  config = require('../config');

var Server = mongo.Server,
  Db = mongo.Db,
  BSON = mongo.BSONPure;

var server = new Server(config.mongodb.host, config.mongodb.port, {auto_reconnect:true, poolSize:config.mongodb.poolSize});
var db = new Db(config.mongodb.databaseName, server, {safe:true});

var this_col = 'user';
db.open(function (err, db) {
  if (!err) {
    console.log("Connected to '" + config.mongodb.databaseName + "' database");
    db.collection(this_col, {safe:true}, function (err, collection) {
      if (err) {
        console.log("The " + this_col + " collection doesn't exist.");
      }
    });
  }
});

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