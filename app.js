var express = require('express');


var app = express();


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
var courseDetails = require('./routes/courseDetails.js');
app.use('/', courseDetails);

app.listen(8084);
