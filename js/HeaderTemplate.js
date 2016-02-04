$(document).ready(function(){
    $.get("partials/Header.html", function(data){
        $("#header").html(data);
    });
});