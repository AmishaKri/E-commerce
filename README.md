# 🛒 E-Commerce Admin Dashboard

An E-Commerce Admin Dashboard built with **React**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB**.

This full-stack web application provides complete **CRUD functionality** for managing products, categories, and customer orders. Administrators can efficiently add, update, and delete products, as well as track and manage customer order statuses.

---

## 📸 Screenshot

![Screenshot (825)](https://github.com/user-attachments/assets/a3190c8d-217c-4a9d-9792-179947547112)

---

## 🚀 Features

- ✅ Create new products with category and price  
- 📋 Read product list with search functionality  
- ✏️ Update existing products and their details  
- 🗑️ Delete unwanted items from inventory  
- 📦 Order management with status updates  
- 🔍 Search functionality for quick filtering  
- 🧑‍💼 Admin dashboard with authentication/logout support

---

## 🧰 Tech Stack

| Frontend        | Backend      | Database |
|-----------------|--------------|----------|
| React           | Node.js      | MongoDB  |
| Tailwind CSS    | Express.js   |          |
| Axios, React Router | JWT for Auth |      |

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Amishakri/Ecommerce.git
cd Ecommerce
```
2. Setup the Backend
```bash
cd Backend
npm install
```
### 2. Create a .env file in the Backend directory with the following content:

.env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

### 3. Start the backend server:
```bash 
npm start
```
### 4. Setup the Frontend
```bash
cd ../Frontend
npm install
npm start
```
📦 API Endpoints
Products
GET /api/products

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id

Orders
GET /api/orders

PUT /api/orders/:id/status

🔐 Authentication
Login and logout functionality using JWT

Only logged-in users can access the dashboard

🧑‍🎓 Author
Amisha Kumari
Built with ❤️ using MERN Stack
https://www.linkedin.com/in/amisha-kumari-544977226/
