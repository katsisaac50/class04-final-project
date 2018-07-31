var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var categoriesRouter = require('./routes/categories');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);

// TODO: insert a new route here :)
app.use('/categories', categoriesRouter);

module.exports = app;
