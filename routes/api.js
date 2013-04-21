

// GET
exports.getpie = function ( req, res ) {
  
  var mysql = require('mysql');
  var fs = require('fs');
  var output = [];

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '8889',
    user     : 'root',
    password : 'root',
    database : 'NodeSample',
  });

  connection.connect();
  res.writeHeader(200, {'Content-type': 'text/csv'});

  var output = [];
  connection.query('SELECT * FROM PieSample', function(err, rows, fields) {
    if (err) throw err;
        output.push("age" + ',' + "population");

    for (var i in rows) {
        output.push(rows[i].title + ',' + rows[i].value);
    }
    console.log(output.join('\n'));
    res.write(output.join('\n'));


   fs.writeFile("pie.csv", output.join('\n').toString(), function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The file was saved!");
      }
  }); 

    res.end();
});

  connection.end();
  
};



exports.getbar= function ( req, res ) {

  var mysql = require('mysql');
  var fs = require('fs');
  var output = [];

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '8889',
    user     : 'root',
    password : 'root',
    database : 'NodeSample',
  });

  connection.connect();
  res.writeHeader(200, {'Content-type': 'text/csv'});

  connection.query('SELECT * FROM BarSample', function(err, rows, fields) {
    if (err) throw err;
        output.push("letter" + ',' + "frequency");

    for (var i in rows) {
        output.push(rows[i].title + ',' + rows[i].value);
    }
  
    console.log(output.join('\n'));
    res.write(output.join('\n'));

/*
   fs.writeFile("bar.csv", output.join('\n').toString(), function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The file was saved!");
      }
  }); 
*/
  res.end();


});
  connection.end();

};

exports.getanimpie= function ( req, res ) {

  var mysql = require('mysql');
  var output = [];

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '8889',
    user     : 'root',
    password : 'root',
    database : 'NodeSample',
  });

  connection.connect();
  res.writeHeader(200, {'Content-type': 'application/json'});

  connection.query('SELECT * FROM BarSample', function(err, rows, fields) {
    if (err) throw err;

    for (var i in rows) {
        output.push(rows[i].value);
    }
  
    console.log(JSON.stringify(output));
    res.write("d3.jsonp.foo('" + output + "');");
    res.end();

});
  connection.end();
  
};


exports.getanimscatter= function ( req, res ) {

  var mysql = require('mysql');
  var output = [];
  var fs = require('fs');

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '8889',
    user     : 'root',
    password : 'root',
    database : 'NodeSample',
  });

  connection.connect();
  res.writeHeader(200, {'Content-type': 'application/json'});

  connection.query('SELECT * FROM ScatterTable', function(err, rows, fields) {
    if (err) throw err;
        
        output.push("date" + '\t' + "close");

    for (var i in rows) {
        output.push(rows[i].ID + '\t' + rows[i].Value);
    }
    console.log(output.join('\n'));
    res.write(output.join('\n'));


   fs.writeFile("scatter.tsv", output.join('\n').toString(), function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The file was saved!");
      }
  }); 
    res.end();

});
  connection.end();
  
};

exports.getanimscatter2= function ( req, res ) {

  var mysql = require('mysql');
  var output = [];
  var fs = require('fs');

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '8889',
    user     : 'root',
    password : 'root',
    database : 'NodeSample',
  });

  connection.connect();
  res.writeHeader(200, {'Content-type': 'application/json'});

  connection.query('SELECT * FROM ScatterTable', function(err, rows, fields) {
    if (err) throw err;
     //   output.push("date" + ',' + "close");

    for (var i in rows) {
        output.push(rows[i].ID + ',' + rows[i].Value);
    }

    console.log(output.join(';'));
    res.write("d3.jsonp.foo('" + output.join(';') + "');");

    res.end();

});
  connection.end();
  
};


exports.getstackedbar= function ( req, res ) {

  var mysql = require('mysql');
  var output = [];
  var fs = require('fs');

  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '8889',
    user     : 'root',
    password : 'root',
    database : 'NodeSample',
  });

  connection.connect();
  res.writeHeader(200, {'Content-type': 'application/json'});

  connection.query('SELECT * FROM BarGroupSample', function(err, rows, fields) {
    if (err) throw err;
     //   output.push("date" + ',' + "close");

    for (var i in rows) {
        output.push(rows[i].Group + ',' + rows[i].Date + ',' + rows[i].Value);
    }

    console.log(output.join(';'));
    res.write("d3.jsonp.foo('" + output.join(';') + "');");

    res.end();

});
  connection.end();
  
};