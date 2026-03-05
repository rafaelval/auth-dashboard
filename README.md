# 🔐 Auth Dashboard

A modern authentication dashboard built with React, TypeScript, and Zustand. Features a complete login flow, protected routes, and user management — powered by the DummyJSON API.

📚 **[Full Documentation →](https://rafaelval-auth-dashboard.mintlify.app/quickstart)**

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+**
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/rafaelval/auth-dashboard.git

# Navigate into the project
cd auth-dashboard

# Install dependencies
npm install
```

### Run the Development Server

```bash
npm run dev
```

The app will be available at **`http://localhost:5173`**

---

## 🔑 Demo Credentials

This project uses the **[DummyJSON API](https://dummyjson.com/users)** as its backend. You can find the full list of available users and their passwords at:

👉 **https://dummyjson.com/users**

All users listed there are valid and can log in to the dashboard. Each user entry includes their `username` and `password` fields.

**Quick example:**

| Username   | Password      |
|------------|---------------|
| `emilys`   | `emilyspass`  |
| `michaelw` | `michaelwpass`|
| `sophiab`  | `sophiabpass` |

> Any user from the DummyJSON list works. The password follows the pattern: `{username}pass`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Zustand](https://zustand-demo.pmnd.rs/) | State management & session persistence |
| [React Router v6](https://reactrouter.com/) | Routing & protected routes |
| [Axios](https://axios-http.com/) | HTTP client with interceptors |
| [DummyJSON](https://dummyjson.com/) | Mock REST API (auth + users) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── router.tsx          # Route definitions
│   └── ProtectedRoute.tsx  # Auth guard component
├── features/
│   └── auth/
│       ├── authStore.tsx   # Zustand auth store
│       └── authService.ts  # Login API calls
├── pages/
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   └── Users.tsx
├── services/
│   └── api.ts              # Axios instance with interceptors
└── shared/
    └── layout/
        └── DashboardLayout.tsx
```

---

## 📖 Documentation

Full documentation is available on Mintlify:

- [Introduction](https://rafaelval-auth-dashboard.mintlify.app/introduction)
- [Quick Start](https://rafaelval-auth-dashboard.mintlify.app/quickstart)
- [Installation](https://rafaelval-auth-dashboard.mintlify.app/installation)
- [Configuration](https://rafaelval-auth-dashboard.mintlify.app/configuration)

---

## 📄 License

MIT
