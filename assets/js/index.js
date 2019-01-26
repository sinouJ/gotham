var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.3,
  centeredSlides: true,
  speed: 800,
  threshold: 10,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  on: {
    transitionEnd: function () {
      var slide = document.querySelector('.swiper-slide-active');
      var pageActive = document.querySelector('.swiper-slide-active').getAttribute('data-ref');
      document.querySelector('.numerotation').innerHTML = '<p>'+pageActive+' of 6</p>';
      if (slide.getAttribute('data-ref') == '5') {
        organizeItems();
      };
    },
    transitionStart: function() {
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
        }, 550);
        setTimeout(function() {
          document.getElementById('line5').style.opacity = '1';
        }, 700);
        setTimeout(function() {
          document.getElementById('line6').style.opacity = '1';
        }, 800);
        setTimeout(function() {
          document.getElementById('line7').style.opacity = '1';
        }, 850);
        setTimeout(function() {
          document.getElementById('line8').style.opacity = '1';
        }, 880);
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
      if (slide.getAttribute('data-ref') == '3') {
        var getUl = document.getElementById('listGeo');
        var getLi = getUl.querySelectorAll('li');
        // for (let i = 0; i < getLi.length; i++) {
        //   setTimeout(function() {
        //     getLi[i].style.marginLeft = '0';
        //   } i*20);
        // }
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
  initialSlide: 2
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
function geometricHover(elt, color, newWidth, newHeight, axisX, axisY) {
  var target = elt.getAttribute('data-num');
  var svgId = document.getElementById(target);
  svgId.setAttribute('fill', color);
  if (newWidth != undefined) {
    if (newWidth == 0) {
      false
    }
    else {
      svgId.setAttribute('width', newWidth);
    }
  }
  if (newHeight != undefined) {
    if (newHeight == 0) {
      false
    }
    else {
      svgId.setAttribute('height', newHeight);
    }
  }
  if (axisX != undefined) {
    if (axisX == 0) {
      false
    }
    else {
      svgId.setAttribute('x', axisX);
    }
  }
  if (axisY != undefined) {
    if (axisY == 0) {
      false
    }
    else {
      svgId.setAttribute('y', axisY);
    }
  }
}
function organizeItems() {
  var list = document.querySelectorAll('.grp1');
  var list2 = document.querySelectorAll('.grp2');
  for (var i = 0; i < list.length; i++) {
    list[i].querySelector('a').parentNode.style.top = i*50+'px';
  }
  for (var i = 0; i < list2.length; i++) {
    list2[i].querySelector('a').parentNode.style.top = i*50+'px';
  }
}
