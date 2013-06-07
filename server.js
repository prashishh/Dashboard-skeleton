
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
app.post('/api/showdb', api.showDB);
app.post('/api/showTables', api.showTables);
app.post('/api/getColumns', api.getColumns);

app.listen(3200, function() {
  console.log("Express server started");
})