const form = document.getElementById("loginForm");
const error = document.getElementById("error");


form.addEventListener("submit", function (e) {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

 
  
  if (!/^[a-zA-Z0-9]{4,15}$/.test(username)) {
    e.preventDefault();
    error.textContent = "Username must be 4–15 alphanumeric characters.";
    return;
  }



  if (
    password.length < 6 ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    e.preventDefault();
    error.textContent =
      "Password must be at least 6 characters, include an uppercase letter and a number.";
    return;
  }



  error.textContent = ""; 
});
