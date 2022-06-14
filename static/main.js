// Main
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    // Trigger API call on click
    document.querySelector(".mobile-nav-toggle").addEventListener("click", (event) => {
      if (document.body.classList.contains("modal-open")) {
          document.body.classList.remove("modal-open")
          document.querySelector("header").classList.remove("modal-open")
          navbar.classList.remove("mobile");
          document.querySelector(".logo").classList.remove("mobile")
          document.querySelector(".mobile-nav-toggle").classList.remove("mobile")
          document.querySelector(".mobile-nav-toggle").src="./images/icon-hamburger.svg"
      } else {
          document.body.classList.add("modal-open")
          document.querySelector("header").classList.add("modal-open")
          navbar.classList.add("mobile");
          document.querySelector(".logo").classList.add("mobile")
          document.querySelector(".mobile-nav-toggle").classList.add("mobile")
          document.querySelector(".mobile-nav-toggle").src="./images/icon-close.svg"
      }
    });
  });
  
  