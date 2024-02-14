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

//Login/Register Front ENd ----------------------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//   const loginForm = document.getElementById("loginForm");
//   loginForm.addEventListener("submit", handleLoginFormSubmit);
// });

// function handleLoginFormSubmit(event) {
//   event.preventDefault();

//   // Get the entered username and password
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // Create an object to hold the login data
//   const loginData = {
//     username,
//     password,
//   };

//   // Send a POST request to the server
//   fetch("/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(loginData),
//   })
//     .then((response) => response.text())
//     .then((result) => {
//       if (result === "Login successful") {
//         // If login is successful, hide the login form and display the welcome message
//         document.getElementById("loginForm").style.display = "none";
//         const welcomeMessage = document.createElement("p");
//         welcomeMessage.textContent = `Welcome, ${username}!`;
//         document.getElementById("welcomeMessage").appendChild(welcomeMessage);
//       } else {
//         // If login fails, display an error message
//         const errorMessage = document.createElement("p");
//         errorMessage.textContent = "Invalid username or password";
//         document.getElementById("loginForm").appendChild(errorMessage);
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       // Handle any errors that occurred during the login request
//     });
// }
