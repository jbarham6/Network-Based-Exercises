var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var course = require('./../util/courseDB');
const { check, validationResult } = require('express-validator');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



router.get('/',function (req,res) {
res.render('index');
});

router.post('/details',urlencodedParser,[check('email').isEmail(),
    check('course').isNumeric()], async function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.redirect('/');
    };
    var course = require('../util/courseDB');
    let courses = await course.getCourse(req.body.course, req.body.startTime, req.body.endTime, req.body.email);
    if(!courses){
        res.render('newCourse')
    }
    else{
        console.log(courses);
        res.render('details', {course: courses});
    }
});
router.post('/newCourse',urlencodedParser,[check('email').isEmail(),
    check('course').isNumeric()],check('title').isAlpha(),check('term').isAlpha(),
    check('instructor').isAlpha(), async function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.redirect('/');
    };
    var course = require('../util/courseDB');

       course.addCourse(req.body.course, req.body.title, req.body.term, req.body.instructor,
           req.body.startTime, req.body.endTime, req.body.email);
       res.render('index');
       console.log("Course Added")

});


router.post('/courseList', urlencodedParser, async function(req, res){
    var course = require('../util/courseDB');
    let courses = await course.getCourses();
    res.render('courseList', {course: courses});
});

module.exports = router;