var course = function(course,title,term,instructor){
    var courseModel = {courseID:course, title:title, term:term, instructor:instructor};
    return courseModel;
};

module.exports.course = course;