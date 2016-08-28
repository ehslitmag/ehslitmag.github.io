var load = function (){
	$('header').delay(100).fadeToggle(700, "linear");
	$('#desc').delay(500).fadeToggle(800, "linear");
	$('.info').delay(800).fadeToggle(800, "linear");
	$('table').delay(800).fadeToggle(200, "linear");
	$('footer').delay(850).fadeToggle(500, "linear");
};

var slider = function (){	
	$('.slideri').click(function(){
		if ($('.slider').slideToggle(500, "swing"), 
		$('.slider p').slideToggle(500, "swing")) {
			$('.slideri').toggleClass('active');
		} 
	});
};

$(document).ready(load);
$(document).ready(slider);