$(function() {

    $.ajax({
        url: 'https://www.codeschool.com/users/erickthered.json',
        dataType: 'jsonp',
        success: function(response) {
          console.log(response.courses.completed);
          for (i =0; i< response.courses.completed.length; i++) {
            var course = response.courses.completed[i];
            var newElement = $('<div></div>');

            newElement.addClass('course');
            newElement.html('<h3>' + course.title + '</h3>');
            newElement.append('<img src="' + course.badge + '">')
            newElement.append('<a href="' + course.url + '" target="_blank" class="btn btn-primary">See Course</a>')
            $('#badges').append(newElement);
          }
        }
      });

});
