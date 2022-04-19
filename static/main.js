// Main
document.addEventListener("DOMContentLoaded", function () {
  // Select the elements
  const form = document.querySelector(".subscribe__form");
  const emailInput = document.getElementById("email");
  const emailInputError = document.querySelector(".error__message");

  // Check on input
  emailInput.addEventListener(
    "input",
    () => {
      if (validateEmail(emailInput.value)) {
        emailInputError.innerHTML = "";
        emailInput.classList.remove("error");
      } else {
        emailInputError.innerHTML = "Please provide a valid email address";
        emailInput.classList.add("error");
      }
    },
    false
  );

  // Check on submit
  form.addEventListener(
    "submit",
    function (event) {
      if (!validateEmail(emailInput.value)) {
        emailInputError.innerHTML = "Please provide a valid email address";
        emailInput.classList.add("error");
        event.preventDefault();
      }
    },
    false
  );
});

// Email validation based on RegExp
function validateEmail(email) {
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegExp.test(email);
}
