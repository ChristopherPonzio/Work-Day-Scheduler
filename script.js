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

