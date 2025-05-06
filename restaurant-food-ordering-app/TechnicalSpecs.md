# **Technical Documentation: Restaurant Food Ordering App**

## **Overview**

This application is a **Restaurant Food Ordering System** where users can browse the menu, manage their cart, and place orders. The system consists of two main parts:

1. **Frontend** built with **React**, **TypeScript**, **Material-UI (MUI)**, **Redux**, and **Axios**.
2. **Backend** built with **Node.js**, serving data from static JSON files (instead of traditional databases).

## **Frontend Architecture**

### **1. Libraries & Tools**

* **React**
* **TypeScript**
* **Material-UI (MUI)**
* **Redux**
* **Axios**

### **3. Pages**

* **Home**: Displays the welcome page with navigation to different sections.
* **Menu**: Displays a list of menu items.
* **Cart**: Displays items currently in the cart.
* **Checkout**: Allows users to review their cart and proceed with placing an order.
* **Login**: User authentication screen to log into the system.

### **4. State Management (Redux)**

* **Actions**: Actions like `addItemToCart`, `removeItemFromCart` are dispatched based on user interaction.
* **Reducers**: Maintain the state for cart items, user data, and order status.

### **5. HTTP Requests (Axios)**

* Axios is used to make HTTP requests to the backend for:

  * Fetching the menu.
  * Managing the cart.
  * Authenticating users.
  * Placing orders.

## **Backend Architecture**

### **1. Libraries & Tools**

* **Node.js**
* **Express**
* **JSON Files**

### **3. Routes**

* **Cart Routes (`/api/cart/`)**:
  * Add, remove, update items in the cart.
  
* **Menu Routes (`/api/menu/`)**:
  * Get all menu items.
  
* **Order Routes (`/api/orders/`)**:
  * Create, place, and view orders.
  
* **User Routes (`/api/users/`)**:

  * Check user credentials (for login).

### **4. Controllers**

* **Cart Controller**: Handles logic for managing the cart.
* **Menu Controller**: Fetches the menu items.
* **Order Controller**: Manages the creation and placement of orders.
* **User Controller**: Handles user authentication.

### **5. Data Handling**

* Data is fetched from static **JSON files** (e.g., `menu.json`, `orders.json`, `users.json`) instead of traditional database queries.

