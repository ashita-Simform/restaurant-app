# Restaurant Food Ordering App

## Overview
The Restaurant Food Ordering App is a full-stack application that allows users to browse a menu, add items to their cart, and place orders. It includes a frontend built with React and TypeScript, and a backend powered by Node.js and Express.

## Features
- Browse menu items by category.
- Add, update, and remove items from the cart.
- Place orders and view order history.
- User authentication and profile management.

## Prerequisites
- Node.js 
- npm 
- A modern web browser

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
  
   cd restaurant-backend
  
2. Install dependencies:
  
   npm install
  
3. Start the backend server:
  
   node server.js
  
   The backend server will run on `http://localhost:5000`.

### Frontend Setup
1. Navigate to the frontend directory:
  
   cd .. # Go back to the root directory
  
2. Install dependencies:
  
   npm install
  
3. Start the frontend development server:
  
   npm run dev
  
   The frontend will run on `http://localhost:3000`.

## Folder Structure

restaurant-food-ordering-app/
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── favicon.ico
├── restaurant-backend/
│   ├── app.js
│   ├── package.json
│   ├── server.js
│   ├── controllers/
│   ├── data/
│   ├── middleware/
│   └── routes/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── store/
│   ├── styles/
│   └── types/


## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Browse the menu, add items to your cart, and place an order.
3. Use the backend API for operations.
