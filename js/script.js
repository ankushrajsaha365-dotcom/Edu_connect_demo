// Redirect user based on selected role
function openDashboard(role) {

  // Store role selection
  localStorage.setItem("userRole", role);

  switch (role) {
    case "student":
      window.location.href = "dashboard.html";
      break;

    case "part-time":
      window.location.href = "apply-teacher.html";
      break;

    case "teacher":
      window.location.href = "dashboard.html";
      break;

    default:
      alert("Invalid role selected");
  }
}

/* --------------------------
   OPTIONAL: protect dashboard
--------------------------- */
function protectPage() {
  const role = localStorage.getItem("userRole");
  if (!role) {
    window.location.href = "login.html";
  }
}
