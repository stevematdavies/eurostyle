"use strict";

var express = require('express');
var app = express();

app.use(express.static(__dirname+'/app'));
app.listen(3000,function(){
    console.log('Server running on: http://127.0.0.1:3000');

})