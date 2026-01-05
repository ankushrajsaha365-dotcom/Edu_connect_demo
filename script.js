function openDashboard(role) {
  switch (role) {
    case "student":
      alert("Redirecting to Student Dashboard");
      break;

    case "part-time":
      alert("Redirecting to Part-Time Teacher Application");
      break;

    case "teacher":
      alert("Redirecting to Teacher Dashboard");
      break;

    default:
      alert("Invalid role");
  }
}
