$(document).ready(function(){
    $('.calc_button').click(function(){
        var current = $("#input").val();
        /* check if zero */
        if (current == '0') {
                current = "";
        }
        /* palitan ang naka-display */
        $("#input").val( current + $(this).text() );
    )};
)};

