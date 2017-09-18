var express = require('express');
var path = require('path');

var flash = require('connect-flash');
var session = require('express-session');

var passport = require('passport');
require('./passport/passport')(passport);
var exphbs = require('express-handlebars');

var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');

var Diagramas = require('./routes/Diagramas');
var Figuras = require('./routes/Figuras');
var Puntos = require('./routes/Puntos');
var Users = require('./routes/Users');
var app = express();

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());




// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//app.use(favicon());
//app.use(logger('dev'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));


app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs(
	{
		//defaultLayout: 'main',
 		extname:'handlebars'
	}
));
app.set('view engine', 'handlebars');

app.use(passport.initialize());
app.use(passport.session());




// URL PARA EL USO DEL REST API
app.use('/api/diagramas', Diagramas);
app.use('/api/figuras', Figuras);
app.use('/api/puntos', Puntos);

app.get('/',function(req, res){
  return res.redirect('login');
});

app.get('/login', Users);
app.post('/login', Users);
app.get('/registro', function(req, res){
    
    //console.log({messages: req.flash('info')});
    
    res.render('registro');
    
});
app.post('/registro', Users);
app.get('/diagramas',function(req, res){
  //res.render('home');
  res.render('home', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user,
      layout: 'main'
      
  });
});



app.get('/diagramas/:id?', function(req, res){
    res.render('diagrama');
});
/*app.get('/',function(req, res){
  res.render('login');
});*/

//app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
