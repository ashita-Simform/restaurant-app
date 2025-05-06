# Chat Prompts for Replicating the Application

This document contains all the prompts used in this chat to replicate the Restaurant Food Ordering App. 

## Prompts

### 1. Generate the Application Structure
Generate a restaurant food ordering single-page application structure using Vite for a React+TypeScript project. Use Material-UI (MUI) for designing, Redux Toolkit for state management, React Router for navigation, Axios for API management, React TanStack for data fetching and caching, and Styled Components for custom styles.

### 2. Backend Setup
Generate the backend for this application. The backend will interact with Node.js and serve data from JSON files. It will handle menu items, user information, and orders.

### 3. Directory Structure
Create the following directory structure in the `restaurant app` folder:

restaurant-backend
├── data
│   ├── menu.json
│   ├── users.json
│   └── orders.json
├── routes
│   ├── menuRoutes.js
│   ├── userRoutes.js
│   └── orderRoutes.js
├── controllers
│   ├── menuController.js
│   ├── userController.js
│   └── orderController.js
├── middleware
│   └── errorHandler.js
├── app.js
├── server.js
├── package.json
└── README.md

### 4. Update JSON Structure for Menu Items
Update the JSON structure for menu items to include detailed information such as nutritional info, allergens, availability, and timestamps for creation and updates. Example:

{
  "id": "item_011",
  "name": "Margherita Pizza",
  "description": "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
  "price": 11.99,
  "category": "main_courses",
  "ingredients": ["flour", "tomato sauce", "mozzarella", "basil"],
  "image": "src/assets/images/pizza.jpeg",
  "available": true,
  "nutritionalInfo": {
    "calories": 700,
    "fat": 25,
    "protein": 30,
    "carbohydrates": 80,
    "fiber": 4
  },
  "allergens": ["gluten", "dairy"],
  "createdAt": "2025-01-26T10:00:00Z",
  "updatedAt": "2025-04-11T09:00:00Z"
}

### 5. Error Handling Module
Generate an error-handling module in the `middleware` folder to handle errors while serving the backend.

### 6. User Management API
Create backend APIs for user management. Implement a POST API to check if a user exists in a JSON object. If the user is found, allow access; otherwise, deny access.

### 7. Cart and Order Management APIs
Generate APIs to manage the user's cart and orders. These APIs should:
- Add or remove items from the cart.
- Update quantities of items in the cart.
- Calculate and retrieve the total price of the cart.
- Log in to an account to place an order.
- Verify order history and profile if logged in.

### 8. Generate APIs for Menu Browsing
Create APIs for the restaurant menu to allow users to browse available items. The API should provide endpoints to:
- View the entire menu.
- Filter items by category.
- Retrieve detailed information about each item, such as name, description, and price.

### 9. API for Adding Items to Cart
Create API functionality to add items to a cart based on user selection.

### 10. Design Pages for UI
Design the following pages for the Restaurant Food Ordering App:
- **Home Page**: Entry page of the application.
- **Menu Page**: Displays the list of menu items.
- **Cart Page**: Displays user cart details.
- **Checkout Page**: Page to review the order.
- **Login Page**: For authentication using username, email, and password.
- **Profile Page**: Displays user account information.

### 11. Update `package.json` and Create Redux Store
Update the `package.json` file with necessary libraries. Create the Redux store and reducer slices for proper state management.

### 12. Generate Reducer Files and Type Definitions
Generate the necessary reducer files and type definitions for the required variables to manage the state in a Redux store. Ensure that the types for each variable are well-defined for type safety and consistency.

### 13. User Management Reducer
Generate a reducer file for user management. Also create Root reducer.

### 14. User Management Types
Generate the types for user management, ensuring they are well-defined for type safety and consistency.

### 15. JSON File for Users
Generate a JSON file containing a valid list of users with the following fields: name, email, and password.

### 16. Fix Dependency Tree
Fix the dependency tree in the `package.json` file to resolve any unresolved peer dependencies.

### 17. Create `index.html`
update App.tsx to apply proper routes. Create an `index.html` file for the frontend UI that includes the necessary HTML structure, meta tags, and references to the compiled JavaScript and CSS files for the frontend application.

### 18. Create `axiosInstance.ts`
Create the `axiosInstance.ts` file in the `src/api` folder and ensure that the `baseURL` is set correctly to the backend URL.

### 19. Update Store for User Management
Update the store files to include the user management reducer.

### 20. Theme Customization
Turn the theme into golden, grey, and white, with white being the backdrop.

### 21. Apply Theme to All Pages
Integrate the backend apis to menu, home, cart, login, profile, checkout pages. Apply the customized theme to all pages.

### 22. Update Application Routes
Update the application routes so that the Home Page is the default route. Ensure that other routes like Menu and Cart are also accessible. When the user clicks on the Checkout route, the Login Page should appear first if the user is not authenticated. Ensure that the checkout flow requires authentication before proceeding, and no user can access the checkout page directly without being logged in.

### 23. Home Page Background
Crete and integrate Header, Navebar and Footer components. Update the Home Page to include a full-size background image that covers the entire viewport.

### 24. Menu Card Styling
Style the menu card component on the Menu Page to make it visually appealing. Add hover effects, rounded corners, and a clean layout.

### 25. Add `useAppDispatch` Hook
Create a Layout page for consistent Header, Navbar and Footer across all the pages. Add the `useAppDispatch` hook in the store file.

### 26. Create Declaration File for Image Modules
Create a declaration file for image modules.

### 27. Style All Components
Style all components to create a modern, user-friendly design that aligns with a clean and minimalistic aesthetic.

### 28. Login Page Functionality
Integrate the Login Page functionality with a backend API to properly validate user credentials. Display clear error messages on invalid login attempts.

### 29. Smooth User Experience
Create the Layout as main component to render other pages as the child route's element. Ensure a clean, smooth user experience with no unwanted scrollbars appearing on the main page until necessary. Ensure that the cart displays prices rounded to two decimal places.

### 30. Cors Error Resolve
Resolve cors error for apis hits from localhost:5173 and add logs for checking the failure in api calls.

### 31. Navbar Component
Update the Navbar component to conditionally render login or logout buttons based on the user's authentication state. If the user is logged in, display a logout button. On clicking logout, log the user out and update the authentication state accordingly.

### 32. Responsive Checkout Page
Design a responsive Checkout Page that features a full-size background image. Display selected items in card-style layouts, similar to the menu component. Include an order summary section.

### 33. Refactor Components
Refactor all components to eliminate inline styles and implement styled-components for each styled element within the component itself.

### 34. Structure Layout
Structure the application so that all pages are hosted inside a Layout component. Additionally, add an "Add to Cart" button on the Menu Page.

### 35. Style Viewport
Structure the styles to cover the view port.

### 35. Note on Potential Errors
Be aware that there may be errors based on the configuration, library versions, and system for which the user is replicating the application. Use inline Copilot suggestions to resolve these issues wherever possible.

### 36. Prefer Agent Mode for Replication
Prefer using agent mode to replicate the system properly, ensuring that all dependencies, configurations, and setups are accurately reproduced.