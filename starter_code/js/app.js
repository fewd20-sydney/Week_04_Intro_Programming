$( document ).ready(function(e) {

	$('.readmore').click(function(e){
		$('.readmore').hide();
		$('#show-this-on-click').slideDown();
		$('.readless').removeClass('hide');
		e.preventDefault();
	});

	$('.readless').click(function(e){
		$('#show-this-on-click').slideUp();
		$('.readless').addClass('hide');
		$('.readmore').show();
		e.preventDefault();
	});

	$('.learnmore').click(function(e){
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
		e.preventDefault();
	});

e.preventDefault();
});

