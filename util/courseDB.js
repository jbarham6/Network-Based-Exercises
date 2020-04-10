var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

var courseSchema = new mongoose.Schema({
    courseID: String,
    title: String,
    term: String,
    instructor: String
});

var course = mongoose.model('course', courseSchema);

var intro = new course({
    courseID: '1212',
    title: 'Intro to CS',
    term: 'Fall',
    instructor: 'Nadia Najjar'
});
var intro2 = new course({
    courseID: '1212',
    title: 'Intro to CS',
    term: 'Spring',
    instructor: 'Mohsen Dorodchi'
});
var logic = new course({
    courseID: '2175',
    title: 'Logic and Algorithms',
    term: 'Fall',
    instructor: 'Ting Li'
});
var compArch = new course({
    courseID: '3181',
    title: 'Computer Architecture',
    term: 'Spring',
    instructor: 'Taghi Mostafavi'
});
course.find(function (err, courses) {
    if (err) return console.error(err);
    if(courses.length==0){
        intro.save(function (err, intro) {
            if (err) return console.error(err);
        });
        intro2.save(function (err, intro2) {
            if (err) return console.error(err);
        });
        logic.save(function (err, logic) {
            if (err) return console.error(err);
        });
        compArch.save(function (err, compArch) {
            if (err) return console.error(err);
        });
    }

});
module.exports = course;