/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-11-6
 * Time: 下午4:30
 * To change this template use File | Settings | File Templates.
 */
var config = require('../config');
var mongo = require('mongoskin');
var db = mongo.db( config.mongodb.host,{database:config.mongodb.databaseName, safe:{w:config.mongodb.backUp, wtimeout:config.mongodb.timeOut}});
db.open(function (err, db) {
  if (!err) {
    console.log("Connected to '" + config.mongodb.databaseName + "' database");
  }
});
exports.dataSouce = function(){
    return db;
}
