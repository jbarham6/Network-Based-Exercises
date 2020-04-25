var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/courses');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    courseID: String,
    title: String,
    term: String,
    instructor: String,
    startTime: String,
    endTime: String,
    email: String
});
module.exports = mongoose.model('courses', courseSchema);