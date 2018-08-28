var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var recordsRouter = require('./routes/records');
var songsRouter = require('./routes/songs');
var songRouter = require('./routes/song');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);

// TODO: insert a new route here :)
app.use('/records', recordsRouter);
app.use('/songs', songsRouter);
app.use('/song', songRouter);

module.exports = app;
