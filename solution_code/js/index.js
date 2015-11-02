
/* Show and hide readmore */

$(document).ready(function(){   /* make a function available after the document is loaded */

document.getElementById("readmore").addEventListener("click", function(event){
    event.preventDefault()
    $('.readmore').hide();
    $('.readless').show();
    $('#show-this-on-click').slideDown();
});


document.getElementById("readless").addEventListener("click", function(event){
    event.preventDefault()
    $('.readless').hide();
    $('.readmore').show();
    $('#show-this-on-click').slideUp();
});

 
/* Show and hide learn more in sidebar */

document.getElementById("learnmore").addEventListener("click", function(event){
    event.preventDefault()
    $('#learnmore').hide();
    $('#learnmoretext').slideDown();
});

})