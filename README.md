
# 🚀 Educase India - ReactJS Development Internship Assignment

This repository contains the **Qualifier Task for ReactJS Intern/Fresher Role** at **Educase India**.
The application replicates the given Adobe XD design with a pixel-perfect user interface and seamless navigation.

🔗 **Live Project**: [https://educaseindia-083i.onrender.com/](https://educaseindia-083i.onrender.com/)
📂 **GitHub Repository**: [https://github.com/mdwarish7867/EducaseIndia](https://github.com/mdwarish7867/EducaseIndia)
🎨 **Design Reference (Adobe XD)**: [View Design](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd/flow)

---

## 📌 Project Overview

* ✅ Built with **ReactJS + Tailwind CSS**
* ✅ Backend with **Node.js + Express + MongoDB Atlas**
* ✅ JWT-based Authentication
* ✅ Fully deployed on **Render** (Frontend + Backend)
* ✅ Pages implemented: Landing, Login, Signup, Profile
* ✅ Mobile-style interface centered in desktop view

---

## ⚡ Tech Stack

* **Frontend**: ReactJS, Tailwind CSS
* **Backend**: Node.js, Express
* **Database**: MongoDB Atlas
* **Authentication**: JWT (JSON Web Token)
* **Hosting**: Render

---

## 📂 Project Structure

```
├── backend/       # Express server, routes, models, controllers  
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/      # React app with Tailwind CSS  
│   ├── src/pages/ (Landing, Login, Signup, Profile)
│   ├── src/components/
│   ├── src/services/api.js
│   └── .env
└── README.md
```

---

## ⚙️ Environment Variables

### 🔹 Frontend (`frontend/.env`)

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 🔹 Backend (`backend/.env`)

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@trackruit.3ri2lhd.mongodb.net/educaseindia?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret_here
```

---

## 🚀 Getting Started

### 🔧 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/mdwarish7867/EducaseIndia
cd EducaseIndia
```

Install **backend** dependencies:

```bash
cd backend
npm install
```

Install **frontend** dependencies:

```bash
cd ../frontend
npm install
```

---

### ▶️ Run Locally

Start **backend** server:

```bash
cd backend
npm start
```

Start **frontend** React app:

```bash
cd ../frontend
npm start
```

The app will run at:

* Frontend → `http://localhost:3000`
* Backend → `http://localhost:5000`

---

## 📡 API Endpoints

### Auth Routes

```http
POST /api/auth/signup   # Register new user
POST /api/auth/login    # Login user
```

### Profile Routes

```http
GET  /api/profile       # Get user profile (requires token)
```

---

## 🖼️ Screens Implemented

1. **Landing Screen** – Welcome with Create Account & Login
2. **Login Screen** – Email & password login
3. **Signup Screen** – Register with Full Name, Phone, Email, Password, Company Name, Agency option
4. **Profile Screen** – Displays user details

---

## 📬 Submission

* **Task**: ReactJS - Intern/Fresher Qualifier Assignment
* **Live Project**: [https://educaseindia-083i.onrender.com/](https://educaseindia-083i.onrender.com/)
* **GitHub Repo**: [https://github.com/mdwarish7867/EducaseIndia](https://github.com/mdwarish7867/EducaseIndia)
* **Design Link**: [Adobe XD](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd/flow)

---

✨ Developed with ❤️ by **Md Warish Ansari** for **Educase India Internship**