$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	$('h1.logo').css({
		'transform' : 'translate(0px, ' + wScroll / 9 + '%)'
	});
});