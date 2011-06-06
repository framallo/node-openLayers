var app, browserify, express;

express = require('express');
app = module.exports = express.createServer();
browserify = require('browserify');

app.configure(function() {
  app.set('views', "" + __dirname + "/views");
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(browserify({
    require: ['openlayers']
  }));
  return app.use(app.router);
});

app.get('/', function(req, res) {
  return res.send("<script src='/browserify.js'></script>");
});

app.listen(3000);
