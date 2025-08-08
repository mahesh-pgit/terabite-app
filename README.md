# 🍕 Terabite | Online Food Ordering Application

**Terabite** is a modern, consumer-first online food ordering app, crafted from scratch with **React**, **Redux Toolkit**, **TailwindCSS**, and **Parcel**. Designed and engineered by **Mahesh Narava**, it delivers a fast, intuitive, and location-aware experience for discovering restaurants, browsing dynamic menus, and managing your cart in real-time.

<!-- ![GitHub last commit](https://img.shields.io/github/last-commit/mahesh-pgit/terabite-app?style=flat-square) -->
<!-- ![GitHub issues](https://img.shields.io/github/issues/mahesh-pgit/terabite-app?style=flat-square) -->
<!-- ![GitHub forks](https://img.shields.io/github/forks/mahesh-pgit/terabite-app?style=flat-square) -->
<!-- ![GitHub stars](https://img.shields.io/github/stars/mahesh-pgit/terabite-app?style=flat-square) -->

[![React](https://img.shields.io/badge/made_with-react-blue?style=flat-square&logo=react)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux.js.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Parcel](https://img.shields.io/badge/Parcel-b41437?style=flat-square&logo=parcel&logoColor=white)](https://parceljs.org/)

[![Vercel](https://img.shields.io/badge/deployed%20on-vercel-black?style=flat-square&logo=vercel)](https://terabite.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square&)](LICENSE)

## 📸 Live Preview

Explore the app live to experience smooth restaurant browsing and seamless cart management 👉 [Check it out on Vercel](https://terabite.vercel.app)

## 📚 Table of Contents

-   [🧩 Features](#🧩-features)
-   [🧑‍🍳 Layout & Pages](#🧑‍🍳-layout--pages)
-   [⚙️ Tech Stack](#⚙️-tech-stack)
-   [🧠 State Management](#🧠-state-management)
-   [🔐 Authentication](#🔐-authentication)
-   [📡 API Endpoints](#📡-api-endpoints)
-   [📁 Project Structure](#📁-project-structure)
-   [🧪 Getting Started](#🧪-getting-started)
-   [🧭 Future Roadmap Ideas](#🧭-future-roadmap-ideas)
-   [🤝 Contributing](#🤝-contributing)
-   [📄 License](#📄-license)
-   [🧑‍💻 Author](#🧑‍💻-author)

## 🧩 Features

-   🍱 **Restaurant Discovery:** Search and filter restaurants by rating, delivery time, cost, and dietary preferences — powered by live location

-   📋 **Dynamic Menus:** Browse categorized menus for each restaurant and manage your cart in real-time

-   🛒 **Cart System:** Dynamic cart with item management, bill calculation, delivery tip, and GST

-   🔐 **User Authentication:** Login/logout via Google OAuth, with persistent user profiles and session tracking

-   📍 **Smart Location Detection:** Uses Geolocation API to fetch nearby restaurants based on latitude & longitude

-   🚫 **Offline & Denied Location Handling:** Friendly error/warning UIs for offline or denied location access

-   💻 **Responsive UI:** Mobile-first layout with adaptive components, SVG icons, and smooth transitions

## 🧑‍🍳 Layout & Pages

-   🧠 **Header** — Fixed header with logo, navigation routes, and login/user

-   🏠 **Home Page** — Restaurant discovery, search, filters, and shimmer loading

-   🍽️ **Restaurant Page** — Restaurant info, menu categories, menu items, add/remove items to cart

-   🛒 **Cart Page** — Item management, real-time bill calculation, tip input, checkout

-   🧾 **About Page** — Overview of the Terabite project, mission statement, and tech highlights

-   📬 **Contact Page** — Developer social links, and contact form with validation

-   🦶 **Footer** — Simple footer with copyright

-   ❌ **Error Pages** — Offline, location denied, and route errors/404 pages

## ⚙️ Tech Stack

-   **Frontend:** React.js + Redux Toolkit + React Router DOM

-   **Styling:** TailwindCSS

-   **Bundler:** Parcel

-   **Auth:** `@react-oauth/google`

-   **APIs:**

    -   **Production:** Vercel Serverless Functions (Express-style handlers in `/api`)
    -   **Development:** Dedicated Node.js backend on Render (`https://terabite-server.onrender.com/api`)
    -   Both use Swiggy’s public API as the data source

## 🧠 State Management

-   🧺 **Redux Toolkit**

    -   Manages cart state via `cartSlice.js`
    -   Persists cart in `sessionStorage`

-   👤 **React Context API**

    -   Manages user profile and authentication state (`UserContext.js`)

-   🪝 **Custom Hooks**

    -   For restaurant data (`useRestaurantsData.js`)
    -   For search & filters (`useRestaurantFilters.js`)
    -   For menu data (`useRestaurantMenu.js`)
    -   For online status (`useOnlineStatus.js`)

## 🔐 Authentication

-   🔑 **Google OAuth Integration** via `@react-oauth/google`

-   📌 Access token stored in `localStorage`

-   👤 User avatar, name, and email displayed in header and profile modal

## 📡 API Endpoints

-   `/api/index.js` — Health check (for deployment diagnostics)

-   `/api/restaurants.js` — Fetches restaurant list from Swiggy based on geolocation

-   `/api/menu.js` — Fetches menu for a specific restaurant

All endpoints support graceful error handling and return status codes/messages

## 📁 Project Structure

```
terabite-app/
├── api/                # Vercel serverless API endpoints (restaurants, menu, index)
├── src/
│   ├── assets/         # SVGs, image URLs
│   ├── components/     # Reusable UI components (cards, buttons, errors)
│   ├── config/         # API base URL, lat/lng defaults, OAuth credentials
│   ├── context/        # UserContext for profile state
│   ├── features/       # Feature modules (menu, restaurants, user)
│   ├── hooks/          # Custom React hooks (online status, filters, data fetching)
│   ├── layouts/        # App shell (Header, Footer, AppLayout)
│   ├── pages/          # Route pages (Home, About, Contact, Cart, Restaurant, Error)
│   ├── routes/         # App route configuration
│   ├── services/       # Utility logic (Google user data, geolocation)
│   ├── store/          # Redux store & slices
│   ├── styles/         # Global CSS (Tailwind, custom fonts)
│   ├── utils/          # Helper functions (validation, constants)
│   ├── App.js          # Main app component (root React component)
│   └── index.js        # React entry point that renders the app into the DOM
├── index.html          # Main HTML entry
├── package.json        # Project metadata and scripts
├── .postcssrc          # PostCSS config for Tailwind
└── vercel.json         # Vercel deployment config
```

## 🧪 Getting Started

```sh
git clone https://github.com/mahesh-pgit/terabite-app.git
cd terabite-app
npm install
npm start
```

The app will open at `http://localhost:1234`

To build for production:

```sh
npm run build
```

## 🧭 Future Roadmap Ideas

-   ♾️ **Endless Restaurant Browsing:** Implement infinite scrolling on the homepage for smooth, uninterrupted restaurant discovery without page reloads or pagination clicks.

-   💳 **Payment Gateway Integration:** Integrate secure payment gateways like Razorpay or Billdesk with robust transaction validation and refund handling.

-   📦 **Live Order Tracking:** Real-time status updates — “Order Placed → Being Prepared → Out for Delivery → Delivered” — powered by WebSockets or Firebase Realtime Database.

-   🕒 **Order History & Quick Reorder:** Maintain detailed past orders for each user in the backend, allowing one-click reorders and spending insights.

-   🔑 **Flexible Sign-In Options:** Support phone-based OTP verification, secure email & password login, and Apple ID sign-in, while retaining the existing Google sign-in, to offer a more accessible and convenient onboarding experience.

-   🔐 **Custom Email/Password Authentication:** Implement a secure backend-driven login system with password hashing, token-based session management, and proper validation to protect user credentials.

-   ❤️ **Favorites & Wishlists:** Let users save restaurants and dishes for easy access and future orders.

-   🛍️ **Multi-Cart Support:** Allow separate carts for different restaurants in a single session — perfect for group orders.

-   📢 **Push Notifications:** Send browser notifications for order updates, delivery progress, promotions, and personalized offers.

-   🔎 **Intelligent Search:** Enable deep search by dish name and cuisine, complementing the existing restaurant name search and filters.

-   🖥️ **Admin Panel:** Allow restaurant partners to track active orders, view sales statistics, and monitor top-selling dishes.

-   🤖 **Personalized Recommendations:** Use AI to suggest dishes and restaurants based on past orders, ratings, and browsing patterns.

-   🗺️ **Interactive Map Discovery:** Allow users to explore nearby restaurants on a map, displaying distances and estimated delivery times.

## 🤝 Contributing

Pull requests and ideas are always welcome! Let’s keep TERABITE clean, sleek, and user-first. ✨

Here’s how you can help:

1. `Fork` the repository to your own GitHub account

2. Create a new branch for your feature or bugfix: `git checkout -b feature/your-feature-name`

3. Commit your changes with a clear message: `git commit -m "Add awesome feature"`

4. Push your branch to your forked repository: `git push origin feature/your-feature-name`

5. Open a `pull request` here, explaining what you’ve done

For major changes, please [open an issue](https://github.com/mahesh-pgit/terabite-app/issues) first so we can discuss the best approach and keep things smooth

Thank you for helping make TERABITE better!

## 📄 License

This project is licensed under the [MIT License](LICENSE), a permissive open-source license that allows you to freely use, modify, and distribute the software.

By using this project, you agree to the terms specified in the LICENSE file, including the disclaimer of warranties and liabilities.

## 🧑‍💻 Author

Built with 🩷 by [Mahesh](https://github.com/mahesh-pgit)

> A passionate React developer focused on building clean and powerful user interfaces.

**Every line of code in this project is thoughtfully crafted for performance, usability, and modern best practices. For details, see the source files and comments.**
