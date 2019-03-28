

var mysql = require('mysql');
var dbc = require('./dbCon');
module.exports.reg = (request, response) => {

     
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    dbc.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
};

