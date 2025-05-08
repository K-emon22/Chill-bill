# 💡 Bill Management Web App - ChillBill

This web application  allows users to view and pay utility bills online. Users can manage their profile, view due bills, and make payments securely. 

---

## 🚀 Live Project

**Live URL:** [https://chill-bill.netlify.app/]

**GitHub Repo:** [https://github.com/programming-hero-web-course1/b11a9-react-authentication-K-emon22]

---

## 📦 Technologies and Major Packages Used

1. **React** – `react`
2. **React Router** – `react-router`
3. **Tailwind CSS** – `tailwindcss`
4. **DaisyUI** – `daisyui` (Tailwind component library)
5. **Vite** – `vite` (build tool)
6. **Firebase** – `firebase` (authentication & database)
7. **React Toastify** – `react-toastify` (toast notifications)
8. **React Icons** – `react-icons` (icon library)
9. **Embla Carousel** – `embla-carousel-react`, `embla-carousel-autoplay`
10. **Type Definitions** – `@types/react`, `@types/react-dom`
11. **ESLint Tools** – `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`
12. **Tailwind + Vite Plugin** – `@tailwindcss/vite`, `@vitejs/plugin-react`

---

## 🧩 Features

- 🔐 **Authentication**: Email/password login, Google sign-in, protected routes, and password validation.
- 🧾 **Bill Management**: View, filter, and pay utility bills like electricity, gas, water, etc.
- 💳 **My Profile**: Display user info and allow updates to profile photo and name.
- 🧠 **Bill Filtering**: Filter bills by bill type via dropdown.
- 🧮 **Payment System**: Deducts bill from user's balance and marks bill as paid with a green tick.
- 🌐 **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- 🔁 **Routing**: SPA with protected routes using `react-router`.
- 🎯 **Carousel**: Organization logos slider using Embla Carousel.

---

## 📋 Pages Overview

### 🔷 Home

- Navbar, carousel, organization icons grid
- 4+ inspired sections from Bangladesh banking websites
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

Ensure Firebase config keys are stored securely using `.env.local` file:

```
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
...

```

---

## 🙌 Acknowledgment

Inspired by mobile banking websites in Bangladesh. 