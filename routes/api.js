

// GET
exports.showDB = function ( req, res ) {
  
  var mysql = require('mysql');
  var fs = require('fs');
  var output = [];

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '8889',
    user     : 'root',
    password : 'root'
  });

  connection.connect();
  res.writeHeader(200, {'Content-type': 'application/json'});

  var output = [];
  connection.query('SHOW DATABASES;', function(err, rows, fields) {
    if (err) throw err;

    for (var i in rows) {
        output.push(rows[i].Database);
    }
    
    console.log(output.join('\n'));
    res.write(output.join('\n'));

    res.end();
  });
  connection.end();
};
