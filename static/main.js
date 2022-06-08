// Main
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  // Trigger API call on click
  document
    .querySelector(".mobile-nav-toggle")
    .addEventListener("click", (event) => {
      if (document.body.classList.contains("modal-open")) {
        document.body.classList.remove("modal-open");
        document.querySelector(".mobile-nav-toggle").src =
          "./images/icon-hamburger.svg";
        navbar.classList.remove("mobile");
        navbar.querySelectorAll("*").forEach((elt) => {
          elt.classList.remove("mobile");
        });
      } else {
        document.body.classList.add("modal-open");
        document.querySelector("header").classList.add("modal-open");
        document.querySelector(".mobile-nav-toggle").src =
          "./images/icon-close.svg";
        navbar.classList.add("mobile");
        navbar.querySelectorAll("*").forEach((elt) => {
          elt.classList.add("mobile");
        });
      }
    });
});
