var express     = require('express');
var http        = require('http');
var path        = require('path');
var reload      = require('reload');
var logger      = require('morgan');
var bodyparser  = require('body-parser');
var favicon     = require('serve-favicon');

var app = express();
var server = http.createServer(app);
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.locals.currentUser = '';
app.locals.unauthorizedAccess = 'Acesso não autorizado pelo Estado. Faça seu login, camarada.';
app.locals.rentals = '';
app.locals.clients = '';
app.locals.maintenances = '';
app.locals.vehicles = '';

app.use(require('./routes/index'));
app.use(require('./routes/clients'));
app.use(require('./routes/rentals'));
app.use(require('./routes/vehicles'));
app.use(require('./routes/maintenance'));
app.use(require('./routes/ending'));

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
