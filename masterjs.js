
$(document).ready(function(){

// green/orange box toggle
$('#green').on('click',function(){
	$('#mybox').css("background-color","green");
});
$('#orange').on('click',function(){
	$('#mybox').css("background-color","orange");
});

// grey short/long box toggle
$('#greybox').on('mouseenter', function(){
	$(this).addClass('longbox').removeClass('shortbox');
});
$('#greybox').on('mouseleave', function(){
	$(this).addClass('shortbox').removeClass('longbox');
});

// Toggle hidden box
$('#togglebox').on('click',function(){
	$('#hiddenbox').toggle();
});
$('#slidebox').on('click',function(){
	$('#hiddenboxslide').slideToggle();
});
$('#fadebox').on('click',function(){
	$('#hiddenboxfade').fadeToggle();
});

// Math function, total
$('#mymathlist').on('keyup', function(){
	var numone = +$('#numone').val();
	var numtwo = +$('#numtwo').val();
	$('#myanswer').val(numone + numtwo);
});

// animate box
$('#smallbox').on('click',function(){
	$(this).toggleClass('moved');
	if($(this).hasClass('moved')) {
		$(this).animate({"left":"600px"},'fast');
	} else {
		$(this).animate({"left":"0px"},'slow'); 
	}
});

//Contents
$('#contentstab').on('mouseenter', function(){
	$('#navwrap').slideToggle();
});

$('#navwrap').on('mouseleave', function(){
	$(this).slideToggle();
});





});














