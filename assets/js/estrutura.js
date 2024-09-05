var swiperOne = new Swiper('.swiperOne', {    
  loop: true,
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
  loop: true,
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


document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('a').forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  

    const sections = document.querySelectorAll('.secao');
    const navLinks = document.querySelectorAll('nav a');
  
    window.addEventListener('scroll', () => {
        let current = '';
  
        sections.forEach(section => {          
            if (section.getAttribute('id') === 'leiterosas') return;
  
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute('id');
            }          
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });  
    });

  

});

window.addEventListener('scroll', function() {
  var logo = document.querySelector('.logo');
  var scrollPosition = window.scrollY;
  var screenWidth = window.innerWidth;

  if (screenWidth < 769) {
      if (scrollPosition > 50) {
          logo.classList.add('intop');
      } else {
          logo.classList.remove('intop');
      }
  } else {
      logo.classList.remove('intop');
  }
});






