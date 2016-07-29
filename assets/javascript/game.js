
$(document).ready(function(){

//Random Integer Generator

function getInt(a,b){
return Math.floor(Math.random() * (a - b +1)) + b;
}
var goalNumber = document.getElementById ('randomInt').innerHTML = getInt(19,120);

var crystalone = getInt(1,12);
var crystaltwo = getInt(1,12);
var crystalthree = getInt (1,12);
var crystalfour = getInt (1,12);
var counter = 0;
var userTotal = 0 + counter;
var wins = 0;
var losses = 0;

//$( ".crystals" ).click(function() {
  //counter = counter + crystalone;

   //$('#totalscore').text(counter);

$( "#crystalone" ).click(function() {
  counter = counter + crystalone;

  $('#totalscore').text(counter);

  if (counter == goalNumber){
  	$('#winlose').text("Wins: " + wins+1 + "Losses: " + losses);

  }else if (counter > goalNumber){
   	$('#winlose').text("Losses: " + losses+1 + "  Wins: " + wins);

  }

$( "#crystaltwo" ).click(function() {
  counter = counter + crystaltwo;

  $('#totalscore').text(counter);

  if (counter == goalNumber){
  	$('#winlose').text("Wins: " + wins+1 + "Losses: " + losses);

  }else if (counter > goalNumber){
   	$('#winlose').text("Losses: " + losses+1 + "  Wins: " + wins);

  }

  $( "#crystalthree" ).click(function() {
  counter = counter + crystalthree;

  $('#totalscore').text(counter);

  if (counter == goalNumber){
  	$('#winlose').text("Wins: " + wins+1 + "Losses: " + losses);

  }else if (counter > goalNumber){
   	$('#winlose').text("Losses: " + losses+1 + "  Wins: " + wins);

  }

  $( "#crystalfour" ).click(function() {
  counter = counter + crystalfour;

  $('#totalscore').text(counter);

  if (counter == goalNumber){
  	$('#winlose').text("Wins: " + wins+1 + "Losses: " + losses);

  }else if (counter > goalNumber){
   	$('#winlose').text("Losses: " + losses+1 + "  Wins: " + wins);

  }

});

});

 });

 });

 });

//method empty
