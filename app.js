var express = require('express');


var app = express();

var expressSession = require('express-session');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
var courseDetails = require('./routes/courseDetails.js');
app.use('/', courseDetails);
app.use(expressSession({secret: 'yes', saveUninitialized: false, resave: false}));

app.listen(8084);
