$( document ).ready(function() {
    console.log( "ready!" );
});

$('.button-navy').click(function(event) {
 	event.preventDefault();
 	alert("We are not ready for sign-ups yet");
});

$( ".content-hidden" ).toggle();

$(".expand-1").click(function() {
	$(".expand-1").hide();
	$(".post-1").show();
	$(".hide-1").show();
});

$(".hide-1").click(function() {
	$(".expand-1").show();
	$(".hide-1").hide();
	$(".post-1").slideUp("slow");
	
});

$(".expand-2").click(function() {
	$(".expand-2").hide();
	$(".post-2").show();
	$(".hide-2").show();
});

$(".hide-2").click(function() {
	$(".expand-2").show();
	$(".hide-2").hide();
	$(".post-2").slideUp("slow");
});

$(".expand-3").click(function() {
	$(".expand-3").hide();
	$(".about-hidden").slideDown();
	$(".hide-3").slideDown();
});

$(".hide-3").click(function() {
	$(".expand-3").show();
	$(".hide-3").hide();
	$(".about-hidden").hide();
});