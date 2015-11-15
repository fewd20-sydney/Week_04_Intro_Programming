$(window).ready(function () {

	$(".readmore").click(function (e) {
		e.preventDefault();
		$("#show-this-on-click").slideDown();
		$(".readless").show();
		$(this).hide();
	});

	$(".readless").click(function (e) {
		e.preventDefault();
		$("#show-this-on-click").slideUp(function() {
		  $(".readmore").show();
		});
		$(this).hide();
	});

	$(".learnmore").click(function (e) {
		e.preventDefault();
		$("#learnmoretext").slideDown();
		$(this).hide();
	});

});
