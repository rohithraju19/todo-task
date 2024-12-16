// Predefined credentials (for demo purposes only; avoid in production)
const validUsername = "admin";
const validPassword = "12345";

// Callback function to redirect to the main page
function redirectToMainPage() {
  alert("Login successful! Redirecting to the main page...");
  window.location.href = "main.html"; // Redirect to main page (placeholder)
}

// Function to validate login
function validateLogin(username, password, callback) {
  const errorMessage = document.getElementById("error-message");

  if (username === validUsername && password === validPassword) {
    callback(); // Call the callback function on success
  } else {
    errorMessage.innerText = "Invalid username or password.";
    
  }
}

// Event listener for form submission
document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  validateLogin(username, password, redirectToMainPage);
});


