$( document ).ready(function(event) {

	$('.readmore').click(function(event){
		event.preventDefault();
		$('.readmore').hide();
		$('#show-this-on-click').slideDown();
		$('.readless').removeClass('hide');
	});

	$('.readless').click(function(event){
		event.preventDefault();
		$('#show-this-on-click').slideUp();
		$('.readless').addClass('hide');
		$('.readmore').show();
	});

	$('.learnmore').click(function(event){
		event.preventDefault();
		$('#learnmoretext').show();
		$('.learnmore').hide();
	});

event.preventDefault();
});