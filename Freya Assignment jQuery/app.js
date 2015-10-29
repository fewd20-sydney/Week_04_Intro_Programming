$( document ).ready(function() {
    alert('Click to browse our awesome page!');
});

$('.readmore').click(function() {
	$('#show-this-on-click').slideDown();
	$('.readmore').hide();
	$('.hide').show();
});

$('.hide').click(function(){
	$('#show-this-on-click').slideUp();
	$('.readmore').show();
	$('.hide').hide();	
});

$('.learnmore').click(function() {
	$('.hide').slideDown();
	$('.learnmore').hide();
	$('.learnless').show();
});

$('.learnless').click(function(){
	$('.hide').slideUp();
	$('.learnmore').show();
	$('.learnless').hide();	
});

$('.blue').click(function(event){
	event.preventDefault();
});




		