# L2T09

A modern, responsive eCommerce web application inspired by Sonos products.
Built with React and Vite, this application allows users to browse products, select variations, manage a shopping cart, and simulate a streamlined checkout experience.

---

> first version

# Features

## Authentication

* Simple login system with validation
* Name and email input with error handling
* Persistent login state using localStorage

## Product Catalog

* Dynamic product listing
* Multiple product variations (color selection)
* Clean, card-based UI

## Shopping Cart

* Add and remove items
* Increase and decrease quantity
* Automatically calculated total price
* Clear cart functionality
* Persistent cart using localStorage

## User Interface

* Toast notifications when adding items to cart
* Scroll-to-top button
* Sticky and animated navigation bar
* Fully responsive layout

## Pages

* Home (Login)
* Products
* Cart
* About (includes contact form with feedback notification)

---

# Tech Stack

* React 19
* Vite
* React Router DOM
* Bootstrap / React-Bootstrap
* Lucide Icons
* Custom CSS (including glassmorphism design elements)

---

# Installation

Clone the repository:

```bash
git clone https://github.com/keenosmith-del/Sonos.git
cd Sonos
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# How It Works

* Application state (user, cart, login status) is stored in localStorage
* React Router handles navigation between pages
* Cart logic ensures:

  * Identical products with the same variation increase quantity
  * Different variations are treated as separate items
* UI updates dynamically based on user interaction

---

# Project Structure

```
src/
│── components/
│   ├── Navbar.jsx
│   ├── TotalPrice.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   ├── About.jsx
│
│── App.jsx
│── main.jsx
│── index.css
```

---

# Future Improvements

* Backend integration (Node.js or Firebase)
* Payment gateway integration (e.g., Stripe)
* Product search functionality
* Advanced authentication (JWT or OAuth)
* Database-driven product system

* search icon click
* notification icon click
* when added to cart bring up sticky floating navbar
* when click on toast notification; jump to cart
* create item page per item.
* disable checkout button is no items in cart

---

# Author

Keeno Smith

---

# License

This project is intended for educational and portfolio purposes.
