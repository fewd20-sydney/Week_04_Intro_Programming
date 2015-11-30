$(document).ready(function(){
	$('.readmore').click(function(event){
		event.preventDefault();
		$('#show-this-on-click').slideDown("slow");
		$('.readless.hide').show(); 
		$('.readmore').hide();
	});

	$('.readless').click(function(event){
		event.preventDefault();
		$('.readmore').show();
		$('.hide').slideUp("slow");
	});

	$('.learnmore').click(function(event){
		event.preventDefault();
		$('#learnmoretext').slideDown("slow");
		$('.learnmore').hide();
	});
})