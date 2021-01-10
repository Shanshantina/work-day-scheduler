
$(function() {
    // get current day
    $("#currentDay").append(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

    // click save button to save the input to local storage
    $(".saveBtn").on("click", function() {
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, input);
    }) 
    
    // change the color for each event base on the hour of the day
    function timeUpdate() {
        // get current hour
        var currentTime = moment().hour();

        // apply to different class base on different time of the date
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            
            if (blockTime < currentTime) {
                $(this).addClass("past");
            } else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    timeUpdate();

    // get the information from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
});



