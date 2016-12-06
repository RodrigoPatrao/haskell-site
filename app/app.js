var express = require('express');
var http = require('http');
var path = require('path');
var reload = require('reload');
var logger = require('morgan');
var bodyparser = require('body-parser');
var favicon = require('serve-favicon');

var app = express();
var server = http.createServer(app);

app.use(express.static('app/public'));
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.get('/', function(req, res){
  res.render('index');
});

app.post('/', function(req, res){
  var pass = req.body.password;
  var conf = req.body.confirmation;
  if (pass == conf){
    res.render('clients');
  }else {
    res.send(req.body);
  }
});

app.get('/logoff', function(req, res){
  res.redirect('/')
});

app.use(require('./routes/clients'));
app.use(require('./routes/rentals'));

app.use(function(req, res){
  res.status(404);
  res.render('404');
});

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 4000);

reload(server, app);

server.listen(app.get('port'), function(){
  console.log("Servidor iniciado em " + app.get('port'));
});
