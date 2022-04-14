// Main
document.addEventListener("DOMContentLoaded", function () {
  // Trigger API call on click
  document.querySelector(".mobile-nav-toggle").addEventListener("click", (event) => {
    if (document.body.classList.contains("modal-open")) {
        document.body.classList.remove("modal-open")
        document.querySelector("header").classList.remove("modal-open")
        document.querySelector(".mobile-nav").classList.remove("mobile-nav--show")
        document.querySelector(".mobile-nav-toggle").src="./images/icon-hamburger.svg"
    } else {
        document.body.classList.add("modal-open")
        document.querySelector("header").classList.add("modal-open")
        document.querySelector(".mobile-nav").classList.add("mobile-nav--show")
        document.querySelector(".mobile-nav-toggle").src="./images/icon-close.svg"
        document.querySelector(".mobile-nav").classList.add("animation");
        // After the animation, reset everything to its default state
        document.querySelector(".mobile-nav").addEventListener('animationend', function(event){
            document.querySelector(".mobile-nav").classList.remove("animation");
         });
    }
  });
});

