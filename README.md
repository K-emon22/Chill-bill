# 💡 Bill Management Web App - ChillBill

This web application allows users to view and pay utility bills online. Users can manage their profile, view due bills, and make payments securely.

---

## 🚀 Live Project

- **Live URL:** [https://chill-bill.netlify.app/](https://chill-bill.netlify.app/)

---

## 📦 Technologies and Major Packages Used

- **React** – `react`
- **React Router** – `react-router`
- **Tailwind CSS** – `tailwindcss`
- **DaisyUI** – `daisyui`
- **Vite** – `vite`
- **Firebase** – `firebase`
- **React Toastify** – `react-toastify`
- **React Icons** – `react-icons`
- **Embla Carousel** – `embla-carousel-react`, `embla-carousel-autoplay`
- **Type Definitions** – `@types/react`, `@types/react-dom`
- **ESLint Tools** – `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`
- **Tailwind + Vite Plugin** – `@tailwindcss/vite`, `@vitejs/plugin-react`

---

## 🧩 Features

- 🧾 **Bill Management**: View, filter, and pay utility bills like electricity, gas, water, etc.
- 💳 **My Profile**: Display user info and allow updates to profile photo and name.
- 🧠 **Bill Filtering**: Filter bills by bill type via dropdown.
- 🧮 **Payment System**: Deducts bill from user's balance and marks bill as paid with a green tick.
- 🌐 **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- 🔁 **Routing**: SPA with protected routes using `react-router`.
- 🎯 **Carousel**: Organization logos slider using Embla Carousel.

---

## 📋 Pages Overview

### 🔷 Home
- Navbar, carousel, organization icons grid
- Footer

### 🔐 Login / Register
- Login: email, password, Google login
- Register: name, email, photo URL, password (with validation)
- Error handling via toast notifications

### 👤 My Profile
- Show profile photo, name, and email
- Option to update name and photo

### 💡 Bills Page
- Grid layout showing all bills with icons, amount, due date, and "Pay" button
- Dropdown filter by bill type

### 📄 Bill Details
- 2-column layout showing bill info and "Pay Bill" button
- After payment: balance deduction and redirect to bills page with ✅

---

## 🔒 Route Protection

- All pages except Home, Login, Register are protected
- Redirect unauthenticated users to Login
- After login, redirect back to intended route

---

## 🔑 Environment Variables

Make sure you create a `.env.local` file in the root with your Firebase credentials:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
