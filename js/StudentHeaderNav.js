$(document).ready(function(){
    $.get("Header.html", function(data){
        $("#mainheader").html(data);
    });
});