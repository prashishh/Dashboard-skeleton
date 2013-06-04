

// GET
exports.showDB = function ( req, res ) {
  
  var mysql = require('mysql');
  var output = [];

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


// GET
exports.showTables = function ( req, res ) {
  
  var mysql = require('mysql');
  var output = [];
  
  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '8889',
    user     : 'root',
    password : 'root',
    database : req.body.database
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
  connection.query('show tables;', function(err, rows, fields) {
    if (err) throw err;

    var col = 'Tables_in_'+ req.body.database;
    for (var i in rows) {
        output.push(rows[i][col]);
    }
    
    res.write(output.join(';'));
    res.end();
  });
  connection.end();
};

// GET
exports.getColumns = function ( req, res ) {
  
  var mysql = require('mysql');
  var output = [];
  
  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '8889',
    user     : 'root',
    password : 'root',
    database : req.body.database
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
  connection.query("select COLUMN_NAME from information_schema.columns where table_schema = '" + req.body.database + "' and table_name = '" + req.body.table +"' order by table_name,ordinal_position", function(err, rows, fields) {
    if (err) throw err;

    output.push(req.body.table);

    for (var i in rows) {
        output.push(rows[i]['COLUMN_NAME']);
    }
    
    res.write(output.join(';'));
    res.end();
  });
  connection.end();
};


