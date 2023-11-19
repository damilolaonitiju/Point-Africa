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

//stat display section

let statDisplays = document.querySelectorAll(".num");
let interval = 5000;

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
