// Main
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".header__links");
  const toggle = document.querySelector(".header___hamburger");
  toggle.addEventListener("click", (event) => {
    if (navbar.classList.contains("display")) {
      navbar.classList.add("fadeout");
      navbar.classList.remove("display");
      // After the animation, reset everything to its default state
      navbar.addEventListener("animationend", function (event) {
        navbar.classList.remove("fadeout");
      });
    } else {
      navbar.classList.add("display");
      navbar.classList.add("fadein");
      // After the animation, reset everything to its default state
      navbar.addEventListener('animationend', function(event){
          navbar.classList.remove("fadein");
       });
    }
  });
});
