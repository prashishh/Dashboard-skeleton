

// GET
exports.showDB = function ( req, res ) {
  
  var mysql = require('mysql');
  var output = [];

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '3306',
    user     : 'root',
    password : ''
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
  console.log('Connected to MySQL.');
  res.writeHeader(200, {'Content-type': 'application/json'});

  var output = [];
  connection.query('SHOW DATABASES;', function(err, rows, fields) {
    if (err) throw err;

    console.log("Query fired and successful.")
    for (var i in rows) {
        output.push(rows[i].Database);
    }
    var result = output.join(',');

    console.log("Response: " + result);
    
    res.write(result);
    res.end();
  });
  console.log("Connection Closed.");
  connection.end();
};


// GET
exports.showTables = function ( req, res ) {
  
  var mysql = require('mysql');
  var output = [];

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '3306',
    user     : 'root',
    password : '',
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
  console.log('Connected to MySQL.');

  res.writeHeader(200, {'Content-type': 'application/json'});

  var output = [];
  connection.query('show tables;', function(err, rows, fields) {
    if (err) throw err;

    var col = 'Tables_in_'+ req.body.database;
    for (var i in rows) {
        output.push(rows[i][col]);
    }
    
    var result = output.join(';');

    console.log("Response: " + result);
    
    res.write(result);
    res.end();

    console.log("Connection Closed.");
  });
  connection.end();
};

// GET
exports.getColumns = function ( req, res ) {
  
  var mysql = require('mysql');
  var output = [];
  
  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '3306',
    user     : 'root',
    password : '',
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

    var result = output.join(';');

    console.log("Response: " + result);
    
    res.write(result);

    res.end();
    console.log("Connection Closed.");

  });
  connection.end();
};


