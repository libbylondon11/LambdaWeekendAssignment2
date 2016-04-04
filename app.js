$(function(){
function movieSynopsis (){
$.ajax('http://www.omdbapi.com/?t=harry+potter+and+the+prisoner&y=&plot=short&r=json').done(function(response){
     console.log(response);
    var synopsis=response;
    logMovie(synopsis);
  })
}
function logMovie(text){
  console.log(text);
  $(".display").append("<p>" + text.Title + " is an excellent book, made into a movie starring " + text.Actors + "." + " " + "The plot is riviting : " + text.Plot + "</p>");
   }
 $(".buttonClass").on("click", function() {
   $(".display").empty();
   movieSynopsis();//empty is a jquery method!
 // console.log("it works!");
})  //click
$(".buttonClass button").mouseover(function(){
    $(".buttonClass button").css("background-color", "grey");
});

function moonRise(){
$.ajax('http://www.omdbapi.com/?t=moonrise+Kingdom&y=&plot=short&r=json').done(function(response){
  console.log(response);
  var moon=response;
  logMoon(moon);
})
}
function logMoon(info) {
console.log(info);
$(".forMoon").append("<p>" + info.Title + " is a movie that I think is so delightful and funny; it is about " + info.Plot + "</p>");
}
$(".moonRise").on("click", function() {
  $(".forMooon").empty();
  moonRise();
  // console.log("moon works!");
})

$(".moonRise button").mouseover(function(){
    $(".moonRise button").css("background-color", "grey");
});


function chevy(){
$.ajax('http://www.omdbapi.com/?t=+christmas+vacation&y=&plot=short&r=json').done(function(response){
  console.log(response);
  var chevyC=response;
  xmasVacation(chevyC);
})
}
function xmasVacation(data) {
console.log(data);
$(".spaceFor").append("<p>" + data.Title + " cracks me up; it is about " + data.Plot + "</p>");
}
$(".chevy").on("click", function() {
  $(".spaceFor").empty();
  chevy();
  // console.log("chevy works!");
})

$(".chevy button").mouseover(function(){
    $(".chevy button").css("background-color", "grey");
});
})
// doc-ready
