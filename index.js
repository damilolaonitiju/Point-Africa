const heroSlider = new Swiper(".cc-home_slide", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1500,

              breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                [BREAKPOINT_WIDTH.extraSmall*16]: {
                    slidesPerView: 3
                },
                [BREAKPOINT_WIDTH.medium*16]: {
                    slidesPerView: 3
                },
                [BREAKPOINT_WIDTH.large*16]: {
                    slidesPerView: 5
                },

  // Navigation arrows
  navigation: {
    nextEl: ".cc-arrow_forward",
    prevEl: ".cc-arrow_back",
  },
});

