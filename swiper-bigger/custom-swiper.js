const swiper = new Swiper('.swiper', {

  autoplay: {
     delay: 3000,
     disableOnInteraction: false
   },

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000, //數字越大, 跑越慢
  watchSlidesProgress: true,
  parallax: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    // type: "fraction",
    type: "bullets",  // Changed to "bullets" for dots pagination
    clickable: true,  // Allows the user to click on the dots to navigate
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});