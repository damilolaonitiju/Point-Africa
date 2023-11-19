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

// document.addEventListener("DOMContentLoaded", function () {
//   let statDisplays = document.querySelectorAll(".num");
//   let interval = 5000;

//   statDisplays.forEach((statDisplay) => {
//     let startValue = 0;
//     let endValue = parseInt(statDisplay.getAttribute("data-val"));
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(function () {
//       startValue += 1;
//       statDisplay.textContent = startValue;
//       if (startValue == endValue) {
//         clearInterval(counter);
//       }
//     }, duration);
//   });
// });

// //stat display with odometer
// let value = 12345;
// setInterval(() => {
//   odometer.innerHtml = value;

// }, 3000)

document.addEventListener("DOMContentLoaded", function () {
  let statDisplays = document.querySelectorAll(".num");

  statDisplays.forEach((statDisplay) => {
    let endValue = parseInt(statDisplay.getAttribute("data-val"));
    let odometerInstance = new Odometer({
      el: statDisplay,
      value: 0, // Initial value
      format: "(,ddd)", // Format for thousand separators
    });

    let interval = 5000;
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function () {
      odometerInstance.update(startValue);
      startValue += 1;

      if (startValue > endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
});
