const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 3,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});