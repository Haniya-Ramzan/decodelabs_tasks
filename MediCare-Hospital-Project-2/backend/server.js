const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// ===========================
// Middleware
// ===========================

app.use(cors());
app.use(express.json());

// ===========================
// Import Routes
// ===========================

const appointmentRoutes = require("./routes/appointment");
const contactRoutes = require("./routes/contact");
const doctorRoutes = require("./routes/doctor");

// ===========================
// Use Routes
// ===========================

app.use("/api/appointments", appointmentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/doctors", doctorRoutes);

// ===========================
// Home Route
// ===========================

app.get("/", (req, res) => {
    res.send("Welcome to MediCare Hospital Backend API!");
});

// ===========================
// Test Route
// ===========================

app.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Test route working"
    });
});

// ===========================
// Start Server
// ===========================

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});