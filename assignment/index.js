$(document).ready(function() {
	alert( "Document has loaded, all good to go Captain" );

		$('.noLink').click(function(event) {
	    alert("Sorry, there is nothing available at this time!")
	    event.preventDefault();
	});

	$('.readmore').click(function(){
		$('#show-this-on-click').slideDown(500);
		$('.readmore').hide();
		$('.readless').show();
	});

	$('.readless').click(function(){
		$('#show-this-on-click').slideUp(500);
		$('.readless').delay(500).hide(0);
		$('.readmore').delay(500).show(0)
	});

	$('.learnmore').click(function(){
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	});
});


