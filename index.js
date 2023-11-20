const heroSlider = new Swiper(".cc-home_slide", {
  // Optional parameters
  loop: true,
  autoplay: true,
  speed: 1500,

  // Navigation arrows
  navigation: {
    nextEl: ".cc-arrow_forward",
    prevEl: ".cc-arrow_back",
  },
});
