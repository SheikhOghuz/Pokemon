$(document).ready(function() {

    $("#test").click(function() {
        $(this).hide();
    });

    $("#show-the-div").click(function() {
        $("#test").show();
    });

    $("#fade").click(function() {
        $("#test1").fadeIn();
        $("#test2").fadeIn("slow");
        $("#test3").fadeIn(3000);
    });

    $("#fadeout").click(function() {
        $("#test1").fadeToggle();
        $("#test2").fadeToggle("slow");
        $("#test3").fadeToggle(3000);
    })
});