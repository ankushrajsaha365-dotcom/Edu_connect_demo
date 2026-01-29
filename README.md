# EduConnect 🎓

**EduConnect** is a role-based frontend prototype of an education platform where students learn, teachers teach, and qualified students earn through part-time teaching.

The project focuses on **clean UI**, **role-based access**, and **realistic platform behavior**, built using pure **HTML, CSS, and JavaScript**.

---

## ✨ Key Features

* 👨‍🎓 **Students**

  * Attend virtual classes
  * Submit assignments
  * Ask doubts
  * View grades

* 👨‍🏫 **Teachers**

  * Manage classes
  * Create assessments
  * Resolve student doubts
  * Track grades

* 👨‍🎓➡️👨‍🏫 **Part-Time Teachers**

  * Teach junior students
  * Solve doubts
  * Earn through teaching

* 🔐 **Authentication & Access Control**

  * Login & logout system
  * Role-based dashboard modules
  * Page-level role protection

* ♿ **Accessible Design**

  * Keyboard navigation
  * High-contrast colors
  * Simple, readable layout

---

## 🧩 Tech Stack

* **HTML5** – Page structure
* **CSS3** – Styling and layout
* **JavaScript (Vanilla)** – Logic, routing, and role protection

No frameworks or backend are used. This keeps the project lightweight and easy to understand.

---

## 📁 Project Structure

```
EduConnect/
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── classes.html
├── assignments.html
├── doubts.html
├── grades.html
├── earnings.html
├── settings.html
├── apply-teacher.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

---

## 🚀 How to Run

1. Clone the repository

   ```bash
   git clone <repo-url>
   ```
2. Open `index.html` in a browser
3. Use the navigation to register, login, and explore dashboards

No server setup required.

---

## 🔒 Role-Based Access Logic

* Dashboard modules are shown/hidden based on role
* Direct URL access is blocked for unauthorized roles
* Session is simulated using `localStorage`

This structure is **backend-ready** and can be easily connected to an API later.

---

## 📌 Project Status

✔ Frontend complete
✔ Role-based UI and routing
✔ Authentication simulation

🚧 Backend integration (future scope)

---

## 📄 License

This project is for **educational and demonstration purposes**.

---

## 🙌 Author

**Raj Saha**

Feel free to fork, explore, and improve this project.
