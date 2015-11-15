alert("I am an alert box!");

$( document ).ready(function() {

	$('#anchor1').click(function(event){
    event.preventDefault();
    	$('#readmore').click(function() {
    		$('#show-this-on-click').slideDown( 'slow' );
    		$('.readmore').hide();
    		$('.readless').show();
		});
	});

	$('#anchor2').click(function(event){
    event.preventDefault();
    	$('#readless').click(function() {
    		$('.readless').hide();
    		$('.readmore').show( 'slow');
    		$('#show-this-on-click').slideUp( 'slow' );	    		
		});
	});
});



$( document ).ready(function() {

	$('#anchor4').click(function(event){
    event.preventDefault();
    	$('.learnmore').click(function() {
    		$(this).show();
    		$('#learnmoretext').slideDown( 'slow' );
    		$('.learnmore').hide();
    		$('#learnless').show();
		});
	});

	$('#anchor5').click(function(event){
    event.preventDefault();
    	$('#learnless').click(function() {
    		$('.learnless').hide();
    		$('.learnmore').show( 'slow');
    		$('#learnmoretext').slideUp( 'slow' );	    		
		});
	});

});



