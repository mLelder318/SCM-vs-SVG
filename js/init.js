$(document).ready(function(){
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
});

$(document).ready(function(){
  $('.parallax').parallax();
});  // A setting that provides parallax feature

$(document).ready(function(){
  $('.carousel').carousel();
});  // A setting for the carousel slider at bottom containing codepen examples

// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');