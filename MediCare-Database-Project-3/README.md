# MediCare Hospital - Database Integration Project (Project 3)

## 📌 Project Overview

MediCare Hospital Database Integration Project is a full-stack web application developed to connect a hospital website backend with a MySQL database.

The main purpose of this project is to store, retrieve, update, and delete hospital-related data using RESTful APIs and database operations.

This project demonstrates backend development, database connectivity, CRUD operations, and proper data handling.

---

# 🎯 Project Goal

The goal of this project is:

- Connect backend API with a database
- Design a simple relational database schema
- Perform CRUD operations
- Store and retrieve hospital data efficiently
- Handle user data properly through APIs

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
│
├── backend
│ │
│ ├── config
│ │ └── database.js
│ │
│ ├── controllers
│ │ ├── doctorController.js
│ │ ├── appointmentController.js
│ │ └── contactController.js
│ │
│ ├── routes
│ │ ├── doctor.js
│ │ ├── appointment.js
│ │ └── contact.js
│ │
│ ├── server.js
│ ├── package.json
│
├── medicare_hospital.sql
│
├── index.html
├── style.css
├── script.js
│
├── images
│
└── README.md

---

# 🗄️ Database Design

Database Name:
medicare_hospital

The project contains the following tables:

## 1. Doctors Table

Stores hospital doctor information.

Fields:

- doctor_id
- full_name
- specialization
- experience
- email
- phone

Operations:

✅ Create Doctor  
✅ Read Doctors  
✅ Update Doctor  
✅ Delete Doctor  


---

## 2. Appointments Table

Stores patient appointment details.

Fields:

- appointment_id
- full_name
- email
- phone
- department
- appointment_date
- appointment_time
- message
- created_at

Operations:

✅ Book Appointment  
✅ View Appointments  
✅ Update Appointment  
✅ Delete Appointment  


---

## 3. Contact Messages Table

Stores messages submitted by website users.

Fields:

- contact_id
- full_name
- email
- phone
- subject
- message
- created_at


Operations:

✅ Send Message  
✅ Retrieve Messages  


---

# 🔗 Backend API Endpoints

## Doctors API

### Add Doctor
POST /api/doctors


### Get All Doctors


GET /api/doctors


### Get Doctor By ID


GET /api/doctors/:id


### Update Doctor


PUT /api/doctors/:id


### Delete Doctor


DELETE /api/doctors/:id


---

# Appointment API

### Create Appointment


POST /api/appointments


### Get All Appointments


GET /api/appointments


### Get Appointment By ID


GET /api/appointments/:id


### Update Appointment


PUT /api/appointments/:id


### Delete Appointment


DELETE /api/appointments/:id


---

# Contact API

### Send Contact Message


POST /api/contact


### Get All Messages


GET /api/contact


---

# ⚙️ Installation & Setup

## 1. Clone Repository


git clone repository-url


---

## 2. Install Backend Dependencies

Navigate to backend folder:


cd backend


Install packages:


npm install


---

## 3. Configure Database

Open:


backend/config/database.js


Update MySQL credentials:

```javascript
host: "localhost",
user: "your_username",
password: "your_password",
database: "medicare_hospital"
4. Import Database

Open MySQL Workbench.

Import:

medicare_hospital.sql

This will create all required tables.

5. Start Backend Server

Run:

node server.js

Server will start at:

http://localhost:3000
🧪 Testing

API testing was performed using:

Postman

Tested operations:

✔ Adding doctors
✔ Retrieving doctor records
✔ Updating records
✔ Deleting records
✔ Booking appointments
✔ Saving contact messages

🔐 Data Handling

The application ensures:

Required field validation
Proper API responses
Error handling
Secure database queries using parameterized SQL queries
🚀 Features

✔ Hospital Website Backend Integration
✔ MySQL Database Connectivity
✔ REST API Development
✔ CRUD Operations
✔ Appointment Management
✔ Doctor Management
✔ Contact Message Storage

👩‍💻 Author

Haniya Ramzan

BS Information Technology Student