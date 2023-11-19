const heroSlider = new Swiper(".cc-home_slide", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".cc-arrow_forward",
    prevEl: ".cc-arrow_back",
  },
});

//cards animation section
const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(".goal-cards_wrapper", { y: "-100%", ease: "bounce" })
  .from(".goal-card_label", { opacity: 0, delay: 1, stagger: 0.5 });
