
var express = require('express'),
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
  app.use(express.static(__dirname));
  app.use(app.router);

});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});


// get api
app.post('/api/showdb', api.showdb);
app.post('/api/showTables', api.showtables);
app.post('/api/getColumns', api.getcolumns);
app.post('/api/barchart', api.barchart);
app.post('/api/tabledata', api.tabledata);
app.post('/api/tabledata2', api.tabledata2);
app.post('/api/piedata', api.piedata);


app.listen(3200, function() {
  console.log("Express server started");
})
