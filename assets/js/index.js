var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.3,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  on: {
    transitionEnd: function () {
      var pageActive = document.querySelector('.swiper-slide-active').getAttribute('data-ref');
      document.querySelector('.numerotation').innerHTML = '<p>'+pageActive+' of 6</p>';
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true
  }
});

function toggleMenu() {
  var menuCrossElt = document.querySelector('.swiper-bg-menu');
  var pageMenu = document.querySelector('.swiper-page-menu');
  var getBody = document.querySelector('body');
  var dataStat = pageMenu.getAttribute('data-stat');

  if (dataStat == 'close') {
    pageMenu.style.visibility = 'visible';
    pageMenu.setAttribute('data-stat', 'open');
    menuCrossElt.setAttribute('data-name', 'cross');
  }
  else {
    setTimeout(function() {
      pageMenu.style.visibility = 'hidden';
    }, 100)
    pageMenu.setAttribute('data-stat', 'close');
    menuCrossElt.setAttribute('data-name', 'menu');
  }
}
