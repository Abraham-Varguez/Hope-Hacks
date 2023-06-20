//Login/Register Transition ----------------------------------------------------------------------------
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

//Login/Register Server ----------------------------------------------------------------------------
const loginForm = document.querySelector(".form-box.login form");
const registerForm = document.querySelector(".form-box.register form");
const baseUrl = window.location.origin; // Get the base URL dynamically

// LOGIN ****************************************************
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // LOGIN VALUES
  const username = document.querySelector(
    '.form-box.login input[type="text"]'
  ).value;
  const password = document.querySelector(
    '.form-box.login input[type="password"]'
  ).value;

  // OBJECT WITH THE FORM VALUES
  const formData = {
    username: username,
    password: password,
  };

  // POST REQUEST TO TH BACKEND
  fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        // Successful login, perform desired actions (e.g., redirect, show success message)
        console.log("Login successful");
        // TODO: Handle success case**************
      } else {
        // Login failed, handle the error (e.g., show error message)
        console.log("Login failed");
        // TODO: Handle error case*****************
      }
    })
    .catch((error) => {
      // Error occurred during the request, handle the error (e.g., show error message)
      console.log("An error occurred during login:", error);
      // TODO: Handle error case***********************
    });
});

//  REGISTER ************************************************************
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // REGISTER INPUT VALUES
  const username = document.querySelector(
    '.form-box.register input[type="text"]'
  ).value;
  const email = document.querySelector(
    '.form-box.register input[type="email"]'
  ).value;
  const password = document.querySelector(
    '.form-box.register input[type="password"]'
  ).value;

  const formData = {
    username: username,
    email: email,
    password: password,
  };

  //POST REQUEST TO THE BACK END
  fetch(`${baseUrl}/login`, {
    method: "POST",
    // An object that specifies the headers to include in the request. Indicate that the request body will be in JSON format.
    headers: {
      "Content-Type": "application/json",
    },
    // AN object, containing the email and password values, is converted to a JSON
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        // Successful registration, perform desired actions (e.g., redirect, show success message)*********
        console.log("Registration successful");
        // TODO: Handle success case**********
      } else {
        // Registration failed, handle the error (e.g., show error message)
        console.log("Registration failed");
        // TODO: Handle error case****************
      }
    })
    .catch((error) => {
      // Error occurred during the request, handle the error (e.g., show error message)
      console.log("An error occurred during registration:", error);
      // TODO: Handle error case*****************
    });
});
