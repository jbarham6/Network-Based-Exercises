var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/courses');
var Course = require('./../Models/Course');

async function getCourses(){
    let coursesList;
    coursesList = await Course.find();
    return coursesList;
}
async function getCourse(courseID, startTime, endTime, email){
    let courseMatch;
    courseMatch = await Course.findOne({courseID: courseID, startTime: startTime, endTime: endTime, email:email});
    return courseMatch;
}
async function addCourse(courseID, title, term, instructor, startTime, endTime, email){
    var newCourse = new Course({courseID: courseID, title: title, term: term, instructor: instructor,
    startTime: startTime, endTime: endTime, email:email});
    await newCourse.save();
}
module.exports.getCourses = getCourses;
module.exports.getCourse = getCourse;
module.exports.addCourse = addCourse;
