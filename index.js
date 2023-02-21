const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
const slider = new Swiper('.slider-inner__container', {
  slidesPerView: 4,
  navigation: {
    nextEl: '.right',
    prevEl: '.left',
  },
});
