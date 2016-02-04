$(document).ready(function(){
    $.get("StudentHeader.html", function(data){
        $("#studentheader").html(data);
    });
});