var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/',function (req,res) {
res.render('index');
});

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
        res.render('index');
    }else{
        res.render('details', {data: theCourse});
    }

});

module.exports = router;