//Sets current day of the week to the HTML
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//EventListener for save button
$('.saveBtn').on('click', saveText);
//save user input
function saveText() {
    var time = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();

    localStorage.setItem(time, value);
}


//Saves Data to HTML
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

