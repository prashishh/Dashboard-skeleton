

// GET
exports.showDB = function ( req, res ) {
  
  var mysql = require('mysql');
  var output = [];

  console.log(req.body);

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '8889',
    user     : 'root',
    password : 'root'
  });

  /*
  var connection = mysql.createConnection({
    host     : req.body.hostname,
    port     : req.body.port,
    user     : req.body.username,
    password : req.body.password
  });
  */

  connection.connect();
  res.writeHeader(200, {'Content-type': 'application/json'});

  var output = [];
  connection.query('SHOW DATABASES;', function(err, rows, fields) {
    if (err) throw err;

    for (var i in rows) {
        output.push(rows[i].Database);
    }
    
    res.write(output.join(','));

    res.end();
  });
  connection.end();
};
