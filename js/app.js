var swiper = new Swiper('.swiper', {
	
	spaceBetween: 35,
	watchSlidesProgress: true,
	pagination: {
	  el: '.swiper-pagination',
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		690: {
			slidesPerView: 2,
		}
	}

  });