$(document).ready(function() {
    $("#right").click(function() {
        let pos = $("#square").position();
        let newRight = pos.left + 50;
        $("#square").animate({ left: newRight + 'px' });
    });

    $("#left").click(function() {
        let pos = $("#square").position();
        let newLeft = pos.left - 50;
        $("#square").animate({ left: newLeft + 'px' });
    });


    $("#up").click(function() {
        let pos = $("#square").position();
        let newUp = pos.top - 50;
        $("#square").animate({ top: newUp + 'px' });
    });

    $("#down").click(function() {
        let pos = $("#square").position();
        let newDown = pos.top + 50;
        $("#square").animate({ top: newDown + 'px' });
    });
});