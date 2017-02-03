$('document').ready(function(){

    $('#firstDiv').click(function(){
        $(this).toggleClass("circleColor");
        var color = $(this).css('background-color');
        $('#inputOne').val(color);
    });


});
//penispenis