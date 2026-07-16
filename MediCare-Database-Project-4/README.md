# MediCare Hospital - Frontend & Backend Integration (Project 4)

## 📌 Project Overview

MediCare Hospital is a full-stack hospital management web application developed as part of **Project 4: Frontend & Backend Integration**. This project focuses on connecting the frontend with backend REST APIs to create a dynamic web application.

The application enables users to interact with the backend through API requests, receive JSON responses, and display dynamic data on the website while handling errors efficiently.

---

# 🎯 Project Goal

The objective of this project is to:

- Integrate the frontend with backend APIs.
- Replace static content with dynamic data.
- Perform asynchronous API requests.
- Handle JSON data properly.
- Display API responses on the user interface.
- Implement proper error handling.
- Demonstrate the complete frontend-to-backend workflow.

---

# 🛠️ Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Tools

- Visual Studio Code
- MySQL Workbench
- Postman
- Git & GitHub

---

# 📂 Project Structure

```
MEDICARE-DATABASE-PROJECT-4

│
├── backend
│   ├── config
│   │   └── database.js
│   │
│   ├── controllers
│   ├── routes
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── images
├── css
├── js
│
├── index.html
├── style.css
├── script.js
│
├── medicare_hospital.sql
│
└── README.md
```

---

# ✨ Features

## Doctors Module

- Add Doctor
- View Doctors
- Update Doctor
- Delete Doctor
- Display doctors dynamically from the backend

---

## Appointment Module

- Book Appointment
- Store appointments in MySQL
- Display success/error messages
- Input validation

---

## Contact Module

- Send Contact Messages
- Store messages in MySQL
- Validate user input
- Handle API responses

---

# 🔗 REST API Endpoints

## Doctors

| Method | Endpoint |
|---------|----------|
| GET | /api/doctors |
| GET | /api/doctors/:id |
| POST | /api/doctors |
| PUT | /api/doctors/:id |
| DELETE | /api/doctors/:id |

---

## Appointments

| Method | Endpoint |
|---------|----------|
| GET | /api/appointments |
| GET | /api/appointments/:id |
| POST | /api/appointments |
| PUT | /api/appointments/:id |
| DELETE | /api/appointments/:id |

---

## Contact

| Method | Endpoint |
|---------|----------|
| GET | /api/contact |
| POST | /api/contact |

---

# 🔄 Frontend & Backend Workflow

```
User
   ↓
Frontend (HTML/CSS/JavaScript)
   ↓
Fetch API (HTTP Request)
   ↓
Express Backend
   ↓
MySQL Database
   ↓
JSON Response
   ↓
Frontend UI Update
```

---

# ⚡ Asynchronous Requests

The project uses modern JavaScript asynchronous programming:

- fetch()
- async
- await

This ensures that the webpage remains responsive while waiting for API responses.

---

# 📦 JSON Handling

The application:

- Sends JSON data to the backend.
- Receives JSON responses.
- Parses responses using `response.json()`.
- Updates the user interface dynamically.

---

# ❗ Error Handling

The application handles different scenarios such as:

- Missing required fields
- Invalid requests
- Network failures
- 404 Not Found
- 500 Internal Server Error
- Database errors
- Server unavailable

User-friendly messages are displayed instead of breaking the application.

---

# 🔐 Security

Basic security practices implemented:

- Input validation
- Parameterized SQL queries
- SQL Injection prevention
- Proper API response handling
- Defensive programming

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Install Dependencies

Navigate to the backend folder:

```bash
cd backend
```

Install packages:

```bash
npm install
```

---

## Configure Database

Update MySQL credentials in:

```
backend/config/database.js
```

Example:

```javascript
host: "localhost",
user: "root",
password: "your_password",
database: "medicare_hospital"
```

---

## Import Database

Import the file:

```
medicare_hospital.sql
```

using MySQL Workbench.

---

## Start the Server

```bash
node server.js
```

Server URL:

```
http://localhost:3000
```

---

# 🧪 Testing

The project was tested using:

- Postman
- Browser Fetch API
- MySQL Workbench

Verified functionality includes:

- API requests
- JSON responses
- CRUD operations
- Dynamic frontend updates
- Error handling

---

# 📚 Concepts Demonstrated

- Frontend & Backend Integration
- RESTful APIs
- HTTP Requests & Responses
- JSON Parsing
- Fetch API
- Async/Await
- CRUD Operations
- MySQL Database Connectivity
- Full Stack Architecture
- Error Handling
- API Communication

---

# 🚀 Project Outcome

This project successfully demonstrates:

- Frontend connected with backend APIs.
- Dynamic data retrieval and display.
- Complete REST API communication.
- Asynchronous request handling.
- Proper JSON processing.
- Database integration.
- Full frontend → backend → database → frontend workflow.

---

# 👩‍💻 Author

**Haniya Ramzan**

BS Information Technology Student

---

# 📌 Project Status

✅ Completed Successfully

Project 4 – Frontend & Backend Integration completed with dynamic API communication, asynchronous requests, MySQL database integration, JSON handling, and proper error handling.