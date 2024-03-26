let dayNight = document.getElementById("daynight");
const banner = document.querySelector("#banner");

dayNight.addEventListener("click", () => {
  banner.classList.toggle("night");
  const isNightMode = banner.classList.contains("night");

  if (isNightMode) {
    dayNight.style.color = "white";
    dayNight.style.backgroundColor = "#444";
  } else {
    // Set styles for day mode
    dayNight.style.color = "black";
    dayNight.style.backgroundColor = "#f0f0f0";
  }
});
var typeSpeed = 0;
var backSpeed = 0;
var loop = false;

var options = {
  strings: ["Coder!", "Fitness Influencer!", "Trader!"],
  typeSpeed: 50, // typing speed in milliseconds
  backSpeed: 25, // backspacing speed in milliseconds
  loop: true, // loop the animation
};
var typed = new Typed("#typed-output", options);
