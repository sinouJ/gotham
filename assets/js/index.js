var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.3,
  centeredSlides: true,
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  on: {
    transitionEnd: function () {
      var pageActive = document.querySelector('.swiper-slide-active').getAttribute('data-ref');
      document.querySelector('.numerotation').innerHTML = '<p>'+pageActive+' of 6</p>';
      var slide = document.querySelector('.swiper-slide-active');
      if (slide.getAttribute('data-ref') == '4') {
        document.getElementById('line1').style.opacity = '1';
        setTimeout(function() {
          document.getElementById('line2').style.opacity = '1';
        }, 200);
        setTimeout(function() {
          document.getElementById('line3').style.opacity = '1';
        }, 400);
        setTimeout(function() {
          document.getElementById('line4').style.opacity = '1';
        }, 600);
        setTimeout(function() {
          document.getElementById('line5').style.opacity = '1';
        }, 800);
        setTimeout(function() {
          document.getElementById('line6').style.opacity = '1';
        }, 1000);
        setTimeout(function() {
          document.getElementById('line7').style.opacity = '1';
        }, 1200);
        setTimeout(function() {
          document.getElementById('line8').style.opacity = '1';
        }, 1400);
      }
      else {
        document.getElementById('line1').style.opacity = '0';
        document.getElementById('line2').style.opacity = '0';
        document.getElementById('line3').style.opacity = '0';
        document.getElementById('line4').style.opacity = '0';
        document.getElementById('line5').style.opacity = '0';
        document.getElementById('line6').style.opacity = '0';
        document.getElementById('line7').style.opacity = '0';
        document.getElementById('line8').style.opacity = '0';
      }
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true
  },
  // initialSlide: 3
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
function goTo(elt) {
  var ifMenu = document.querySelector('.swiper-page-menu');
  var pageDest = elt.getAttribute('data-num');
  swiper.slideTo(pageDest - 1);
  if (elt.parentNode.parentNode.parentNode == ifMenu ) {
    toggleMenu();
  }
}
