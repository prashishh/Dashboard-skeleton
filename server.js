
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

app.get('*', api.getbar);

app.listen(3100, function() {
  console.log("Express server started");
})
