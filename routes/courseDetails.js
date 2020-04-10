var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var course = require('./../util/courseDB');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



router.get('/',function (req,res) {
res.render('index');
});

router.post('/details',urlencodedParser, function(req, res) {
    course.find({courseID: req.body.course},function (err, courses) {
        if (err) return console.error(err);
        if(courses.length == 0){
            res.render('newCourse')
        }
        res.render('details', {course: courses});
    });
});
router.post('/newCourse', urlencodedParser, function(req, res){
    var newCourse = new course({
        courseID: req.body.course,
        title: req.body.title,
        term: req.body.term,
        instructor: req.body.instructor
    });
    course.find({courseID: req.body.course},function (err, courses) {
        if (err) return console.error(err);
        if (courses.length == 0) {
            newCourse.save(function (err, newCourse) {
                if (err) return console.error(err);
                res.render('details', {course: courses});
            });
        }
        res.render('details',  {course: courses});
    });
});
router.post('/courseList', urlencodedParser, function(req, res){
    course.find(function (err, courses) {
        if (err) return console.error(err);
        res.render('courseList', {course: courses});
    });
});
module.exports = router;