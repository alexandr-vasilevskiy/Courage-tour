$(function() {

  // owl-carousel

  $('.banner-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 700,
    items: 1,
    lazyLoad: true,
  });

  $('.hottour-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 25,
    navText: ['<img style="transform: rotate(180deg)" src="img/svg/arrow.svg">', '<img src="img/svg/arrow.svg">'],
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      800: {
        items: 3,
      },
    }
  });

  $('.populartour-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 25,
    navText: ['<img style="transform: rotate(180deg)" src="img/svg/arrow.svg">', '<img src="img/svg/arrow.svg">'],
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      800: {
        items: 3,
      },
    }
  });

  // tabs
  $('#tabs').tabs();

  new SimpleBar(document.querySelector('.scroll'));


});




// burger
function mobileMenu(){
  var burger = document.querySelector('.burger');
  burger.addEventListener('click', function(){
    if(this.classList.contains('active')){
      this.classList.remove('active');
    }
    else{
      this.classList.add('active');
    }
  })
  var navLinks = document.querySelectorAll('.menu-link');
  for(i=0; i<navLinks.length; i++){
    navLinks[i].addEventListener('click', function(){
      var burger = document.querySelector('.burger');
      burger.classList.remove('active');
    })
  }
}


window.onload = function(){
  if(window.innerWidth < 767){
    mobileMenu();
  }
}