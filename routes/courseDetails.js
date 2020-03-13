var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var count = 0;


router.get('/',function (req,res) {
res.render('index', {data: count});
});
var myLogger = function (req, res, next) {
    count++;
    console.log(count);
    next();
};

router.use(myLogger);

router.post('/details',urlencodedParser, function(req, res) {
    var theCourse = require('./../models/Course');


    theCourse = {
        courseID: req.body.course,
        title: req.body.title,
        term: req.body.term,
        instructor: req.body.instructor
    };
    console.log(theCourse);
    if(theCourse.courseID == '' || theCourse.title == '' || theCourse.term == '' || theCourse.instructor == ''){
        res.render('index', {data: count});

    }else{
        res.render('details', {data: theCourse});

    }

});

module.exports = router;