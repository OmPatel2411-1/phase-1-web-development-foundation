# Phase 1 — Web Development Foundation

This repository contains my 7-day web development foundation challenge.

The goal of this phase was to build practical basics of frontend development, JavaScript functionality, backend APIs, and frontend-backend connection through daily execution and GitHub progress.

## Phase 1 Status

Completed

## Challenge Duration

7 Days

## Main Goal

By the end of Phase 1, my target was to build and complete a full-stack e-commerce mini project using:

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* Basic APIs

## Why I Started This Challenge

I wasted a lot of time during the first 3 years of my engineering.

Now my focus is to become placement-ready in the next 6 months by building real skills, real projects, and visible consistency.

This challenge was my first step toward that goal.

## Final Project

Full-Stack E-commerce Mini Project

This project includes frontend UI, dynamic product rendering, search filtering, cart functionality, localStorage, backend product APIs, and frontend-backend connection.

## Phase 1 Roadmap

| Day   | Focus                            | Output                                          |
| ----- | -------------------------------- | ----------------------------------------------- |
| Day 1 | HTML and Basic CSS               | Personal Developer Profile Page                 |
| Day 2 | CSS Layout and Responsive Design | E-commerce Homepage Layout                      |
| Day 3 | JavaScript Basics and DOM        | Dynamic Product Rendering and Search            |
| Day 4 | Cart Functionality               | Add to Cart, Remove from Cart, and localStorage |
| Day 5 | Node.js and Express Basics       | Backend Server and Product API                  |
| Day 6 | Frontend and Backend Connection  | Fetch Products from Backend API                 |
| Day 7 | Final Polish and Documentation   | Testing, README Update, and Phase 1 Wrap-up     |

## Repository Structure

```text
phase-1-web-development-foundation/
│
├── day-1-profile-page/
│   ├── index.html
│   └── style.css
│
├── ecommerce-fullstack-project/
│   ├── frontend/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   │
│   └── backend/
│       ├── server.js
│       ├── package.json
│       └── package-lock.json
│
├── .gitignore
└── README.md
```

## Final Features Completed

* Responsive e-commerce homepage layout
* Shop by Category section
* Featured Products section
* Product data rendered dynamically
* Search products by name
* Search products by category
* No products found message
* Price formatting in Indian number format
* Add to Cart functionality
* Cart count update
* Cart items display
* Remove from Cart functionality
* Cart persistence using localStorage
* Express backend server
* Product API
* Single product API by ID
* Frontend-backend connection using fetch
* Loading message while products load
* Error message when backend is not running
* Final project status section
* Project documentation

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Storage

* localStorage for cart data
* JavaScript array for backend product data during Phase 1

## API Routes

| Method | Route             | Description                |
| ------ | ----------------- | -------------------------- |
| GET    | /                 | Backend health check       |
| GET    | /api/products     | Get all products           |
| GET    | /api/products/:id | Get a single product by ID |

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/OmPatel2411-1/phase-1-web-development-foundation.git
```

### 2. Open Backend Folder

```bash
cd phase-1-web-development-foundation/ecommerce-fullstack-project/backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Backend Server

```bash
node server.js
```

Backend will run on:

```text
http://localhost:5000
```

### 5. Test Backend API

Open this URL in browser:

```text
http://localhost:5000/api/products
```

You should see product data in JSON format.

### 6. Open Frontend

Open this file in browser:

```text
ecommerce-fullstack-project/frontend/index.html
```

Or use Live Server in VS Code.

## Day-wise Progress Summary

### Day 1 — Personal Developer Profile Page

Completed a personal developer profile page with:

* Header
* About Me
* Skills
* Education
* Projects
* Contact Form
* Footer

### Day 2 — E-commerce Homepage Layout

Completed a responsive e-commerce homepage layout with:

* Navbar
* Search bar
* Hero section
* Shop by Category section
* Featured Products section
* Product cards
* Footer

### Day 3 — Dynamic Product Rendering and Search

Completed JavaScript functionality for:

* Product array
* Dynamic product rendering
* Category badges
* Search by product name
* Search by category
* No products found message
* Price formatting

### Day 4 — Cart Functionality

Completed cart functionality with:

* Add to Cart
* Cart count update
* Cart item display
* Remove from Cart
* localStorage persistence
* Cart data retained after refresh

### Day 5 — Backend Product API

Completed backend foundation with:

* Node.js project setup
* Express.js server
* Root backend route
* Product API route
* Single product API route
* JSON middleware
* .gitignore setup

### Day 6 — Frontend and Backend Connection

Completed frontend-backend connection with:

* CORS setup
* API base URL
* Fetch products from backend
* Loading state
* Error handling
* Search/filter working with backend data

### Day 7 — Final Polish and Documentation

Completed final cleanup with:

* Final testing
* Footer update
* Project status section
* README documentation
* Feature summary
* Run instructions

## What I Learned

During this phase, I learned and practiced:

* Building structured frontend pages
* Creating responsive layouts
* Using JavaScript for dynamic UI
* DOM manipulation
* Search and filtering logic
* Cart state management
* Browser localStorage
* Setting up a Node.js project
* Creating Express.js backend routes
* Returning JSON API responses
* Handling route parameters
* Connecting frontend with backend using fetch
* Basic loading and error handling
* Writing cleaner project documentation
* Maintaining daily GitHub progress

## Rules I Followed

* Build daily
* Push code daily
* Post progress daily
* Show proof through screenshots, videos, and GitHub commits
* Focus on execution, not perfection
* Learn by building instead of only watching tutorials

## Author

Om Patel
Final-year IT Student
Aspiring Full Stack Developer
