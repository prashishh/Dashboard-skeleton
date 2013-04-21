
var express = require('express'),
   // routes = require('./routes/index'),
    api = require('./routes/api');

var app = express();

// initial configuration
app.configure( function() {
  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view options', {
    layout: false
  });
  // middleware supporting JSON, urlencoded and multipart requests
  app.use(express.bodyParser());
  // compression
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);

});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

/*
// routes
app.get('/', routes.index);
app.get('/getbar', routes.getpie);
app.get('/getpie', routes.getbar);
*/

// get api
app.get('/api/getpie', api.getpie);
app.get('/api/getbar', api.getbar);
app.get('/api/getanimpie', api.getanimpie);
app.get('/api/getanimscatter', api.getanimscatter);
app.get('/api/getanimscatter2', api.getanimscatter2);
app.get('/api/getstackedbar', api.getstackedbar);

app.get('*', api.getbar);

/*

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '8889',
  user     : 'root',
  password : 'root',
  database : 'NodeSample',
});

connection.connect();

/*
var query = connection.query('SELECT * FROM PieSample');
 
query.on('error', function(err) {
    throw err;
});
 
console.log("title" + "," + "value");
query.on('result', function(row) {
    console.log(row.title + ',' + row.value);
});


var query = connection.query('SELECT * FROM BarSample');
 
query.on('error', function(err) {
    throw err;
});
 
console.log("title" + "   " + "value");
query.on('result', function(row) {
    console.log(row.title + '   ' + row.value);
});

connection.end();
*/

app.listen(3100, function() {
  console.log("Express server started");
})
