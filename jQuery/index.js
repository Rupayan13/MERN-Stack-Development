//when jQury cdn is inserted into the head section then we have to implement all the jquery code using ready method
// $("document").ready(function(){
//     $("h1").css("color", "red");
// });
// $("h1").css("color", "red");
$("h1").addClass("big-title margin-50");
$("h1").text("Bye");
$("button").html("<em>Hey</em>");
$("button").click(function(){
    // $("h1").css("color", "purple");
    // $("h1").hide();
    $("h1").toggle();
});
$(document).keydown(function(event){
    $("h1").text(event.key);
});
