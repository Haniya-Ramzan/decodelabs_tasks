const express = require("express");

const router = express.Router();

const {
    bookAppointment,
    getAllAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
} = require("../controllers/appointmentController");

// ======================================
// GET All Appointments
// ======================================

router.get("/", getAllAppointments);

// ======================================
// GET Appointment By ID
// ======================================

router.get("/:id", getAppointmentById);

// ======================================
// Update Appointment
// ======================================

router.put("/:id", updateAppointment);

// ======================================
// Delete Appointment
// ======================================

router.delete("/:id", deleteAppointment);

// ======================================
// Book Appointment
// ======================================

router.post("/", bookAppointment);

module.exports = router;