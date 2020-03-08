var express = require ("express");
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());
// importing routes

 var connection = require('./src/config/config.js')

app.use(require('./src/routes/attendance.routes.js'));


app.listen(4001,function(){
    console.log("server is running on 4001 port")
});
    
