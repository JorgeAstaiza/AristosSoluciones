$(document).ready(function(){
    new WOW().init();
	smoothScroll.init({
		speed: 800, // Integer. How fast to complete the scroll in milliseconds
    	offset: 90, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	});

    var $contactForm = $('#contact-form');
	$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/comercial@aristossoluciones.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Enviando mensaje…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Mensaje enviado!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, a ocurrido un error, intentalo de nuevo.</div>');
		}
	});
    
	});

	/* scroll cambio de menu*/
	window.onscroll = function()
	{
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
		if(scroll >= 540)
		{
			$('#scroll').addClass('scroll')
			$('#scrolldos').addClass('scrolldos')
			$('#scrolltres').addClass('scrolltres')
		}
		else{
			$('#scroll').removeClass('scroll')
			$('#scrolldos').removeClass('scrolldos')
			$('#scrolltres').removeClass('scrolltres')
		}
	}

	/* carrusel de imagenes*/
	 $('.owl-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			autoplaySpeed: 400,
			autoplayTimeout: 1000,
            margin: 0,
			nav: true,
            autoWidth: false,

            navText: ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2,
                    margin: 20
                },
                800: {
                    items: 3,
                    margin: 20
                },
                1000: {
                    items: 4,
                    margin: 20
                }
            }
        })


}());
