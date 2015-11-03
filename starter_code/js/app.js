function main() {
	$( "a" ).click(function(event) {
  		event.preventDefault()
	});

	$(".readmore").click(function(){
		$("#show-this-on-click").slideDown();
		$(".readless").show();
		$(".readmore").hide();		
	});

	$(".readless").click(function() {
		$("#show-this-on-click").slideUp();
		$(".readless").hide();
		$(".readmore").show();
	});

	$(".learnmore").click(function() {
		$("#learnmoretext").slideDown();
		$(".learnmore").hide();
	});

};

$(document).ready(main);