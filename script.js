const form = document.getElementById("my-form");
const firstName = document.getElementById("first-name");
const firstNameError = document.getElementById("first-name-error");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("new-password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (firstName.value.trim() === "") {
    firstNameError.textContent = `You must enter a first name`;
    firstNameError.style.color = "red";
    firstNameError.style.fontSize = "12px";
  } else {
    firstNameError.textContent = "";
  }
});
