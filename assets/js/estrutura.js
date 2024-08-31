var swiperOne = new Swiper('.swiperOne', {    
  loop: false,
	effect: "fade",

  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiperSecao4 = new Swiper('.swiperSecao4', {    
  loop: false,
	effect: "fade",
  autoHeight: true,

  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function openLeite() {
	body = document.querySelector('body');
	const leite = document.querySelector('#leiterosas');
	body.classList.add('open');	
	leite.classList.add('open');
}
function closeLeite() {
	body = document.querySelector('body');
	const leite = document.querySelector('#leiterosas');
	body.classList.remove('open');	
	leite.classList.remove('open');
}

let navLinks = document.querySelectorAll('nav a');

function openMenu() {
  if (window.innerWidth < 769) {
    let body = document.querySelector('body');
    let header = document.querySelector('header');  
    header.classList.add('open');
    body.classList.add('open');
  }
}

function closeMenu() {
  if (window.innerWidth < 769) {
    let body = document.querySelector('body');
    let header = document.querySelector('header');	
    header.classList.remove('open');
    body.classList.remove('open');
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {    
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    body.classList.remove('open');
    header.classList.remove('open');
  });
});
