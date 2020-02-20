// скролл вверх по кнопке
$(document).ready(function() {
	$('#arrow-start').click(function() {
		$('html').animate({scrollTop:0}, 1000);
	});
});

