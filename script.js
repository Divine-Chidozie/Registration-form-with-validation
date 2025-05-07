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

const profilePicture = document.getElementById("profile-picture");
const profilePictureError = document.getElementById("profile-picture-error");

const successMessage = document.getElementById("success-message");

const age = document.getElementById("age");
const ageError = document.getElementById("age-error");
const newAge = "please enter your age";

const referral = document.getElementById("referral");
const referralError = document.getElementById("referral-option");

const bio = document.getElementById("bio");
const bioError = document.getElementById("bio-error");
// clear error on input
[
  firstName,
  lastName,
  email,
  newPassword,
  profilePicture,
  age,
  referral,
  bio,
].forEach((input, i) => {
  const errorElements = [
    firstNameError,
    lastNameError,
    emailError,
    newPasswordError,
    profilePictureError,
    ageError,
    referralError,
    bioError,
  ];
  input.addEventListener("input", () => {
    errorElements[i].textContent = "";
  });
});

personalAccount.addEventListener("change", () => {
  businessAccountError.textContent = "";
});
businessAccount.addEventListener("change", () => {
  businessAccountError.textContent = "";
});
termsAndConditions.addEventListener("change", () => {
  termsAndConditionsError.textContent = "";
});

const errorColor = "red";
const errorFontSize = "13px";

// adding eventlisterner to form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from submitting

  let isValid = true;

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
    emailError.style.fontSize = errorFontSize;
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "please enter a valid email address";
    emailError.style.color = errorColor;
    emailError.style.fontSize = errorFontSize;
    isValid = false;
  }
  if (!newPassword.value.trim()) {
    newPasswordError.textContent = "please enter a new password";
    newPasswordError.style.color = errorColor;
    newPasswordError.style.fontSize = errorFontSize;
    isValid = false;
  } else if (newPassword.value.trim().length < 8) {
    newPasswordError.textContent =
      "password must have a minimum of 8 characters";
    isValid = false;
  }
  if (!personalAccount.checked && !businessAccount.checked) {
    businessAccountError.textContent = "you must choose an account type";
    businessAccountError.style.color = errorColor;
    businessAccountError.style.fontSize = errorFontSize;
    businessAccountError.style.margin = "0px";
    isValid = false;
  } else {
    businessAccountError.textContent = "";
  }
  if (!termsAndConditions.checked) {
    termsAndConditionsError.textContent =
      "You must accept the Terms and Conditions";
    termsAndConditionsError.style.color = errorColor;
    termsAndConditionsError.style.fontSize = errorFontSize;
    termsAndConditionsError.style.margin = "0px";
    isValid = false;
  }
  if (!profilePicture.files.length) {
    profilePictureError.textContent = "please upload a profile picture";
    profilePictureError.style.color = errorColor;
    profilePictureError.style.fontSize = errorFontSize;
    isValid = false;
  }

  if (!age.value.trim()) {
    ageError.textContent = newAge;
    ageError.style.color = errorColor;
    ageError.style.fontSize = errorFontSize;
    isValid = false;
  } else if (parseInt(age.value) < 18) {
    ageError.textContent = "you must be 18+ proceed";
    ageError.style.color = "yellow";
    ageError.style.fontSize = errorFontSize;
    isValid = false;
  } else if (age.value >= 18) {
    console.log("welcome user");
  }
  if (referral.value === "") {
    referralError.textContent = "please select an option";
    referralError.style.color = errorColor;
    referralError.style.fontSize = errorFontSize;
    isValid = false;
  }

  if (bio.value.trim() === "") {
    bioError.textContent = "Textarea cannot be empty.";
    bioError.style.color = errorColor;
    bioError.style.fontSize = errorFontSize;
    isValid = false;
  }

  if (isValid) {
    // if all fields are valid
    successMessage.textContent = "Form submitted successfully";
    successMessage.style.color = "green";
    successMessage.style.fontSize = "15px";
    successMessage.style.textAlign = "center";
    successMessage.style.marginBottom = "2rem";
  }
});
