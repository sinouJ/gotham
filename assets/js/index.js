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
      // var slide = document.querySelector('.swiper-slide-active');
      // if (slide.getAttribute('data-ref') == '4') {
      //   document.getElementById('line1').style.opacity = '1';
      //   setTimeout(function() {
      //     document.getElementById('line2').style.opacity = '1';
      //   }, 200);
      //   setTimeout(function() {
      //     document.getElementById('line3').style.opacity = '1';
      //   }, 400);
      //   setTimeout(function() {
      //     document.getElementById('line4').style.opacity = '1';
      //   }, 550);
      //   setTimeout(function() {
      //     document.getElementById('line5').style.opacity = '1';
      //   }, 700);
      //   setTimeout(function() {
      //     document.getElementById('line6').style.opacity = '1';
      //   }, 800);
      //   setTimeout(function() {
      //     document.getElementById('line7').style.opacity = '1';
      //   }, 850);
      //   setTimeout(function() {
      //     document.getElementById('line8').style.opacity = '1';
      //   }, 880);
      // }
      // else {
      //   document.getElementById('line1').style.opacity = '0';
      //   document.getElementById('line2').style.opacity = '0';
      //   document.getElementById('line3').style.opacity = '0';
      //   document.getElementById('line4').style.opacity = '0';
      //   document.getElementById('line5').style.opacity = '0';
      //   document.getElementById('line6').style.opacity = '0';
      //   document.getElementById('line7').style.opacity = '0';
      //   document.getElementById('line8').style.opacity = '0';
      // }
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true
  },
  initialSlide: 4,
  allowTouchMove: false
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
// function centerCross() {
//   var menu = document.querySelector('.swiper-page-menu');
//   var triggerMenu = document.querySelector('.swiper-bg-menu');
//   console.log(triggerMenu.offsetWidth);
//   triggerMenu.style.left = 'calc(75px + '+menu.offsetWidth / 2+' + '+triggerMenu.offsetWidth+')'
// }
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
function dropdown() {
  var family = document.querySelector('.family');
  var dataStat = family.getAttribute('data-stat');
  var arrow = document.getElementById('arrow');

  if (dataStat == 'close') {
    family.style.visibility = 'visible';
    family.setAttribute('data-stat', 'open');
    arrow.style.transform = 'translateY(-50%) rotate(180deg)'
  }
  else {
    family.style.visibility = 'hidden';
    family.setAttribute('data-stat', 'close');
    arrow.style.transform = 'translateY(-50%) rotate(0deg)'
  }
}
function changeSize(elt) {
  var sizeValue = elt.value;
  var classArray = elt.getAttribute('class')
  var verify = classArray.split(' ').includes('error');
  if (isNaN(sizeValue) == false) {
    document.querySelector('textarea').style.fontSize = sizeValue + 'px';

    if (verify == true) {
      removeClass(elt, 'error')
    }
    else {
      return
    }
  }
  else {
    if (verify == true) {
      return
    }
    else {
      elt.className += ' error'
    }
  }
}
function removeClass(el, className){
  el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}
function changeFamily(elt) {
  var title = document.getElementById('thisTitle').querySelector('p');

  if (elt.checked == true) {
    title.innerHTML = elt.id;
    document.querySelector('textarea').style.fontFamily = 'Gotham-'+elt.id;
    dropdown();
  }
}
function changeColor(elt) {
  var colorValue = elt.value;
  document.querySelector('textarea').style.color = '#' + colorValue;
}
function card() {
  var cards = [
    {img: "img/imgCard/logoMCFC.svg", title: "Twitter", description: "Gotham a remplacé Helvetica sur votre réseau social préféré le 30 mai 2014"},
    {img: "img/imgCard/logoMCFC.svg", title: "Moonlight Movie Poster", description: "Gotham a été utilisée pour faire les affiches sur célèbre film Moonlight racontant l'histoire d'un jeune afro américain essayant de vivre son homosexualité."},
    {img: "img/imgCard/logoMCFC.svg", title: "Arte Magazin", description: "Gotham est devenue la police utilisée par Arte. Ils l'utilisent essentiellement en capitales. Les graisses light, book et bold sont utilisées."},
    {img: "img/imgCard/logoMCFC.svg", title: "James Bond Spectre Movie Poster", description: "Gotham a été utilisée sur certaines affiches du film James Bond Spectre. La police a essentiellement servi à écrire le mot \"Spectre\" en lettres capitales."},
    {img: "img/imgCard/logoMCFC.svg", title: "Obama 2008", description: "Barack Obama a utilisé Gotham pour sa campagne présidentielle en 2008. On reconnaîtra notamment la très célèbre affiche \"HOPE\" conçue par Shepard Fairey."},
    {img: "img/imgCard/logoMCFC.svg", title: "Starbucks Coffee", description: "Starbucks a utilisé Gotham pour la packaging de plusieurs de ses produits. La police est utilisée principalement pour des sous-titres qui décrivent le produit."},
    {img: "img/imgCard/logoMCFC.svg", title: "Netflix", description: "Netflix utilisait Gotham avant de créer sa propre police pour des raisons financières"},
    {img: "img/imgCard/logoMCFC.svg", title: "Spotify", description: "Le logo Spotify a été créé avec la typo Gotham avec un point rond et une ligature entre le f et le y"},
    {img: "img/imgCard/logoMCFC.svg", title: "Manchester City écusson", description: "Nouveau logo dévoilé en décembre 2015 visant à moderniser l’écusson du club tout en se rapprochant de l’écusson « classique »"},
    {img: "img/imgCard/logoMCFC.svg", title: "GQ Magazine", description: "GQ était le commanditaire de la police Gotham, elle a été créée pour ce Magazine en 2000 par Tobias Frere-Jones"}
  ];
  var slide5 = document.querySelector('.swiper-slide[data-ref=\'5\']');

  for (var i = 0; i < cards.length; i++) {
    var contentHTML = '<div class="card" index='+i+'><div class="row nm"><ion-icon onclick="closeCard(this)" name="close"></ion-icon><div class="col s12 np"><img src='+cards[i].img+'></div></div><div class="row nm"><div class="col s12"><h3>'+cards[i].title+'</h3></div></div><div class="row nm"><div class="col s12"><p>'+cards[i].description+'</p></div></div></div>'
    slide5.insertAdjacentHTML('beforeend', contentHTML)
  }
}
function openCard(elt) {
  var indexCard = elt.getAttribute('data-num');
  var cards = document.getElementsByClassName('card');

  addClass(cards[indexCard], 'open');
}
function closeCard(elt) {
  removeClass(elt.parentNode.parentNode, 'open')
}
