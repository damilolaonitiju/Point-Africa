const heroSlider = new Swiper(".cc-home_slide", {
  // Optional parameters
  loop: true,
  autoplay: true,
  speed: 1500,

  // Navigation arrows
  navigation: {
    nextEl: ".cc-next",
    prevEl: ".cc-prev",
  },
});

function runAnimation() {
  const sl = gsap.timeline({ defaults: { duration: 1 } });

  sl.from(".goal-card", { y: "-100%", ease: "bounce", stagger: 0.5 }).from(
    ".goal-card_label",
    { opacity: 0, stagger: 0.3 },
  );
  return sl;
}
gsap.to(".goal-card", {
  scrollTrigger: {
    trigger: ".c-goal",
    start: "top 15%",
    onEnter: function () {
      runAnimation();
    },
  },
});

function runCounter() {
  let statDisplays = document.querySelectorAll(".num");
  let interval = 3000;

  statDisplays.forEach((statDisplay) => {
    let startValue = 0;
    let endValue = parseInt(statDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      statDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
}

// Use ScrollTrigger to trigger the function
gsap.to(".c-stats_wrapper", {
  scrollTrigger: {
    trigger: ".c-embed_video",
    start: "top 10%",
    end: "bottom bottom",
    onEnter: function () {
      runCounter();
    },
    onLeaveBack: function () {},
  },
});
