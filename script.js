const form = document.getElementById("my-form");

const firstName = document.getElementById("first-name");
const firstNameError = document.getElementById("first-name-error");

const lastName = document.getElementById("last-name");
const lastNameError = document.getElementById("last-name-error");

const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

const newPassword = document.getElementById("new-password");
const newPasswordError = document.getElementById("new-password-error");

const personalAccount = document.getElementById("personal-account");
const personalAccountError = document.getElementById("personal-account-error");

const businessAccount = document.getElementById("business-account");
const businessAccountError = document.getElementById("business-account-error");

const termsAndConditions = document.getElementById("terms-and-conditions");
const termsAndConditionsError = document.getElementById(
  "terms-and-conditions-error"
);

const successMessage = document.getElementById("success-message");

// clear error on input
[firstName, lastName, email, newPassword].forEach((input, i) => {
  const errorElements = [
    firstNameError,
    lastNameError,
    emailError,
    newPasswordError,
  ];
  input.addEventListener("input", () => {
    errorElements[i].textContent = "";
    successMessage.textContent = ""; // clear success message when editing
  });
});

// adding eventlisterner to form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from submitting

  let isValid = true;

  const errorColor = "red";
  const errorFontSize = "14px";

  // form validation
  if (!firstName.value.trim()) {
    firstNameError.textContent = "please enter your first name";
    firstNameError.style.color = errorColor;
    firstNameError.style.fontSize = errorFontSize;
    isValid = false;
  }
  if (!lastName.value.trim()) {
    lastNameError.textContent = "please enter your last name";
    lastNameError.style.color = errorColor;
    lastNameError.style.fontSize = errorFontSize;
    isValid = false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    emailError.textContent = "please enter your email address";
    emailError.style.color = errorColor;
    email.style.fontSize = errorFontSize;
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "please enter a valid email address";
    emailError.style.color = errorColor;
    emailError.style.fontSize = errorFontSize;
    isValid = false;
  }
  if (!newPassword.value.trim()) {
    newPasswordError.textContent = " please enter a new password";
    newPasswordError.style.color = errorColor;
    newPasswordError.style.fontSize = errorFontSize;
    isValid = false;
  } else if (newPassword.value.trim().length <= 7) {
    newPasswordError.textContent =
      "password must have a minimum of 7 characters";
    isValid = false;
  }

  // if all fields are valid
  if (isValid) {
    successMessage.textContent = "Form submitted successfully";
    successMessage.style.color = "green";
    successMessage.style.fontSize = "15px";
    successMessage.style.textAlign = "center";
    successMessage.style.marginBottom = "2rem";
  }

  setTimeout(() => {
    form.reset();
    successMessage.textContent = "";
  }, 3000);
});
