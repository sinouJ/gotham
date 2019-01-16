var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.3,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
