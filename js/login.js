document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;

  // Fake authentication (frontend demo)
  if (email && role) {
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);

    window.location.href = "dashboard.html";
  } else {
    alert("Please fill all fields");
  }
});
