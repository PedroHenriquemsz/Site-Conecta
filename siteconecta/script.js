/*var btn = document.querySelector("#integracao");
btn.addEventListener("click", function() {
    window.scrollTo(900,900);
}); */

$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});
