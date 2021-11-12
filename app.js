var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelize= require ('sequelize')
/* var sql= new sequelize('auri_max', 'root', 'bocajuniors12.',{
  host: '127.0.0.1',
  port: 3306,
  dialect: "mysql"
}) */
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require ('./routes/api')

var app = express();

//verificando base de datos//
/* var test = sql.authenticate()
    .then(function () {
        console.log("Base de datos conectada exitosamente");
    })
    .catch(function (err) {
        console.log("Base de datos desconectada. Error: " + err);
    })
 */
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
