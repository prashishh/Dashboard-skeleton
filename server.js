
var express = require('express'),
    api = require('./routes/api');

var app = express();

// initial configuration
app.configure( function() {

  /*
  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view options', {
    layout: false
  });
  */

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
app.get('/api/showdb', api.showDB);

app.listen(3000, function() {
  console.log("Express server started");
})
