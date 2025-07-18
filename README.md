
# 🛒 ShoppyGlobe E-commerce API

ShoppyGlobe is a backend RESTful API built using **Node.js**, **Express.js**, and **MongoDB** that handles essential e-commerce functionalities like product management, user authentication, and cart operations.

---

## 🚀 Features

- 🧾 CRUD operations for Products
- 🛍️ Add, update, and delete items in the shopping cart
- 🔐 User authentication using JWT
- 📦 MongoDB integration for persistent data storage
- 🧪 Tested with ThunderClient
- ✅ Input validation & error handling middleware

---

## 📁 Project Structure

```
shoppyglobe-backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   └── cartController.js
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Cart.js
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── cartRoutes.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── .env
├── server.js
└── README.md
```

---

## 🔧 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shoppyglobe-backend.git
   cd shoppyglobe-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/shoppyglobe
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

---

## 🧪 API Testing with ThunderClient

Screenshots of API tests are included in the `screenshots/` folder.

| Route               | Method | Description                  | Auth Required |
|--------------------|--------|------------------------------|----------------|
| `/products`         | GET    | Fetch all products           | ❌             |
| `/products/:id`     | GET    | Fetch product by ID          | ❌             |
| `/cart`             | POST   | Add product to cart          | ✅             |
| `/cart/:id`         | PUT    | Update cart item quantity    | ✅             |
| `/cart/:id`         | DELETE | Remove product from cart     | ✅             |
| `/register`         | POST   | Register new user            | ❌             |
| `/login`            | POST   | Authenticate user (JWT)      | ❌             |
 
---

## 🧠 Sample JSON (Product)

```json
{
  "name": "Wireless Mouse",
  "price": 899,
  "description": "Ergonomic wireless mouse with USB receiver",
  "stock": 25
}
```

## 🧠 Sample JSON (Cart Add)

```json
{
  "productId": "64e26fbbfae8b2d29fd5cb1a",
  "quantity": 2
}
```

---

## 🔐 JWT Authentication

1. Use `/register` to create a user.
2. Use `/login` to get a token.
3. Add token in ThunderClient under **Authorization** tab as **Bearer Token**.

---

## ⚠️ Error Handling

- Returns `400` for validation errors
- Returns `404` if product or cart item not found
- Returns `401`/`403` for unauthorized access

---

## ✅ Screenshots

Add screenshots of:
- Product list
- Add to cart
- Register/Login
- Error cases

> Stored in `screenshots/` or include them in your submission PDF if submitting offline.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- ThunderClient for testing

---

## 📄 License

This project is for educational purposes only.
