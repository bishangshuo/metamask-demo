'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var Worker = require('./worker');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});
var workerObj = new Worker();

app.all('*', function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); 
    res.header("X-Powered-By",' 3.2.1') 
    res.header("Content-Type", "application/json;charset=utf-8"); 
    next(); 
});

app.post('/add-number', urlencodedParser, function(req, res){
    workerObj.getInstance().process('add-number', req, res);
})

var server = app.listen(8089, function(){
    console.log('server running on port: '+server.address().port);
})