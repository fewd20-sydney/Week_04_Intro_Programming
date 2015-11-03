$(document).delegate('a:Event(click)', 'click', function (e) { e.preventDefault(); });

$( ".readmore" ).click(function() {
  $( "#show-this-on-click" ).slideDown();
});
$( ".readmore" ).click(function() {
  $( "#hidebtn" ).show();
});
$( ".readmore" ).click(function() {
  $( ".readmore" ).hide();
});

$( ".readless" ).click(function() {
  $( "#hidebtn" ).slideUp();
});
$( ".readless" ).click(function() {
  $( "#show-this-on-click" ).hide("slow");
});
$( ".readless" ).click(function() {
  $( ".readmore" ).show(1000);
});