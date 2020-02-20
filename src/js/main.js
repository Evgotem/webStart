// скролл вверх по кнопке
$(document).ready(function() {
	$('#arrow-start').click(function() {
		$('html').animate({scrollTop:0}, 1000);
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>200){
            $('#arrow-start').addClass('show');
        }else{
           $('#arrow-start').removeClass('show');
        }
	});
});


