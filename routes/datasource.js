/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-11-5
 * Time: 下午12:54
 * To change this template use File | Settings | File Templates.
 */
var config = require('../config'),
    mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
var server = new Server(config.mongodb.host, config.mongodb.port, {auto_reconnect:true, poolSize:config.mongodb.poolSize});
var db = new Db(config.mongodb.databaseName, server, {safe:{w:config.mongodb.backUp, wtimeout:config.mongodb.timeOut}});
db.open(function (err, db) {
    if (!err) {
        console.log("Connected to '" + config.mongodb.databaseName + "' database");
    }
});

function getDataSource() {
    return db;
}
exports.dataSouce = getDataSource;
