# Task Management App (TypeScript + React + Auth0)

A secure, user-specific task management application built with **TypeScript**, **React**, **Auth0**, and **Context API**. Users can create, edit, delete, and view tasks specific to their Auth0 profile.

---

## 🚀 Features

- 🔐 User authentication with Auth0
- 🗂️ Task Dashboard (per-user)
- 📝 Create and Edit tasks
- 🧾 View task details
- 🧠 Built using Context API + TypeScript
- 💾 Tasks persisted in localStorage
- 🔒 Protected routes (PrivateRoute.tsx)

---

## 📦 Tech Stack

- React
- TypeScript
- Auth0
- Context API
- React Router
- localStorage (for persistence)

---

## 📁 Project Structure

\`\`\`
src/
├── components/         # All pages (Dashboard, TaskForm, Details)
├── context/            # Task context for global state
├── interfaces/         # TypeScript interfaces
├── App.tsx             # Route definitions
├── index.tsx           # Entry point with Auth0Provider
\`\`\`

---

## ⚙️ Installation

\`\`\`bash
git clone https://github.com/gopal1407/typescript-task-manager.git
cd typescript-task-manager
npm install
npm start
\`\`\`

> Make sure to configure your own Auth0 domain and clientId in `index.tsx`.

---

## 🌐 Auth0 Setup

1. Create an Auth0 Single Page App
2. Add allowed URLs: `http://localhost:3000`
3. Get your **domain** and **clientId**
4. Paste them into `index.tsx`

---

## 🧪 Future Enhancements

- ✅ Firebase/MongoDB backend
- ✅ Responsive styling
- ✅ Task export (CSV/JSON)
- ✅ Task sharing or collaboration

---

## 📄 License

MIT © 2025 Your Name
