var fscontroller=require('../controller/fs');


var express = require('express');

exports.routeApis = function(app){
 app.get('/user_reg', fscontroller.reg) ;

}