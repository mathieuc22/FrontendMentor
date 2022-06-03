// Main
document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.querySelector(".card__share-btn");
  const shareOptions = document.querySelector(".share");

  document.addEventListener("click", (e) => {
    if (e.target.closest(".card__share-btn")) {
      shareButton.classList.add("card__share-btn--active");
      shareOptions.classList.add("active");
    } else {
      shareButton.classList.remove("card__share-btn--active");
      shareOptions.classList.remove("active");
    }
  });
});
