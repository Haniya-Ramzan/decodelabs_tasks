const express = require("express");
const router = express.Router();

const {
    addDoctor,
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
} = require("../controllers/doctorController");

// GET All Doctors
router.get("/", getAllDoctors);

// GET Doctor by ID
router.get("/:id", getDoctorById);

// POST Add Doctor
router.post("/", addDoctor);

// PUT Update Doctor
router.put("/:id", updateDoctor);

// DELETE Doctor
router.delete("/:id", deleteDoctor);

module.exports = router;