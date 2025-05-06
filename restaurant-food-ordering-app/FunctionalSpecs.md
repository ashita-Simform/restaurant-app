## **Functional Documentation: Restaurant Food Ordering App**

## **Overview**

The **Restaurant Food Ordering System** allows customers to browse menus, manage a cart, place orders. The application is split into a frontend (built with React, TypeScript, MUI, Redux) and a backend (built with Node.js), where data is stored in static JSON files.

## **Functional Flow**

### **1. User Authentication**

* **Login**: The user logs in by providing credentials. The backend checks the credentials against stored data in the `users.json` file.

### **2. Menu Management**

* **Browse Menu**: The user can view the complete menu.

### **3. Cart Management**

* **Add Items to Cart**: Users can add items to their cart.
* **Update Item Quantity**: Users can change the quantity of items already in their cart.
* **View Total Price**: The system will calculate the total price based on the items in the cart.

### **4. Order Placement**

* **Checkout**: After reviewing the cart, users proceed to checkout, where they confirm their order.
* **Place Order**: Once the user confirms the details, they can place the order.

## **User Stories**

1. **As a user**, I want to browse the menu so that I can view all available items.
2. **As a user**, I want to add items to my cart so that I can order them later.
3. **As a user**, I want to view my cart and modify item quantities or remove items.
4. **As a user**, I want to place an order once I've reviewed my cart and confirmed my details.

## **Technology Stack**

* **Frontend**: React, TypeScript, Material-UI (MUI), Redux, Axios.
* **Backend**: Node.js, Express.
* **Data**: Static JSON files for menu, orders, and user data.
