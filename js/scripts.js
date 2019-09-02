

//look into jquery and how this is broken down

//once page is loaded
$(document).ready(function () {
    //if the button is clicked
    $("#portfolio-button").click(function () {
        //animate the html and body
        $('html, body').animate({
            //to scroll to the top of portfolio section
            //by an offset of top
            //for a duration of 1.5seconds 
            scrollTop: $("#portfolio-section").offset().top
            }, 1500);
    });
});