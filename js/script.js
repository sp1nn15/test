$(document).ready(function(){
	var questions_id = 0;

	$('.reference-item').each(function(){
		questions_id = questions_id + 1;
		$(this).attr('questions-id', questions_id).find('.reference-name').attr('questions-id', questions_id);
	});

	$('.reference-name').on('click', function() {
		var questions_id = $('.reference-item[questions-id="'+ $(this).attr('questions-id') +'"]');

		if( questions_id.hasClass('active') ) {
			questions_id.removeClass('active')
		} else {
			questions_id.addClass('active')
		}

		questions_id.find('.reference-text').slideToggle(300);
	});

	let $owl = $('.carousel-2');
	$owl.owlCarousel({
		margin: 24,
		loop: true,
		center: false,
		startPosition: 0,
		stagePadding: 0,
		nav: false,
		dots: false,
		navText: ['', ''],
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 4
            }
        }
	});
});