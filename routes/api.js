

// responds list of all databases - beginning of setup
exports.showdb = function ( req, res ) {
  
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


// responds tables when a database is selected in the setup phase. Database name is passed in req.
exports.showtables = function ( req, res ) {
  
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
    for (var i in rows) 
        output.push(rows[i][col]);
    
    
    var result = output.join(';');

    console.log("Response: " + result);
    
    res.write(result);
    res.end();

    console.log("Connection Closed.");
  });
  connection.end();
};

// responds columns of a table when a database is selected. Table name and database name is passed in req
exports.getcolumns = function ( req, res ) {
  
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

    for (var i in rows) 
        output.push(rows[i]['COLUMN_NAME']);
    

    var result = output.join(';');

    console.log("Response: " + result);
    
    res.write(result);

    res.end();
    console.log("Connection Closed.");

  });
  connection.end();
};

// responds barchart in csv format
// req has database name, table name and column name
exports.barchart = function(req, res) {
  var mysql = require('mysql');
  var output = [];
  
  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '3306',
    user     : 'root',
    password : '',
    database : req.body.databasename
  });

  console.log(req.body.databasename);

  var label = req.body.label;
  var quantity = req.body.quantity;

  connection.connect();
  console.log("Database connected to get bar chart.");
  
  res.writeHeader(200, {'Content-type': 'application/json'});
  connection.query('SELECT ' + label + ' , ' + quantity + ' FROM ' + req.body.tablename, function(err, rows, fields) {
  
  if (err) throw err;

  for (var i in rows) 
      output.push(rows[i][label] + ',' + rows[i][quantity]);
  
  console.log(JSON.stringify(output));
  res.write("d3.jsonp.foo('" + output + "');");
  res.end();
});

  connection.end();

};

// responds table data in json format
exports.tabledata = function(req, res) {
  var mysql = require('mysql');
  var output = [];
  
  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '3306',
    user     : 'root',
    password : '',
    database : 'tabledata'
  });

  console.log(req.body.tables.join(','));

  connection.connect();
  console.log("Database connected to get tabledata.");

  res.writeHeader(200, {'Content-type': 'application/json'});
  connection.query('SELECT ' + req.body.tables.join(',') + ' FROM table1', function(err, rows, fields) {
  
  if (err) throw err;

  var result = JSON.stringify(rows);

  console.log(result);

  res.write(result);
  res.end();
});

  connection.end();

};