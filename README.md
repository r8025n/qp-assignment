# Backend Engineer Assignment – Employee API

This project implements a secure, scalable web API to return employee information under a given position, protected via JWT authorization and displayed through a Bootstrap-based UI.

---

## Features

-  RESTful API with standard practices
-  JWT-protected endpoints
-  Unit tests for core functionality
-  Handles up to 5000 concurrent requests (cluster-ready)
-  Bootstrap UI to interactively view employees by position

---

## 📦 Technologies Used

- Node.js
- Express.js
- JSON Web Token (`jsonwebtoken`)
- Bootstrap 5
- Jest + Supertest (for testing)
- Dotenv (for environment management)
- PM2 or Node cluster (for concurrency)

---

## 📂 Folder Structure
```
qp-assignment/
├── src/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── services/
│ ├── views/ # Bootstrap UI
├── tests/
│ ├── api.test.js
│ └── function.test.js
├── app.js # Express app config
├── server.js # Server entry point (clustering supported)
├── .env
├── .env.dev
├── package.json
└── README.md
```
---

##  How to Run the Project

###  1. Clone the Repo

```bash
git clone https://github.com/your-username/employee-api.git
cd employee-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npm test
```

### 4. Start Server(Single-Core)

```bash
npm run prod
```

### 5. Handle 5000+ requests

```bash
npm install -g pm2
pm2 start server.js -i max
```
