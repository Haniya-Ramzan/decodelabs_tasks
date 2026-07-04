const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/doctors.json");

// ======================================
// Add Doctor
// ======================================

const addDoctor = (req, res) => {

    const {
        fullName,
        specialization,
        experience,
        email,
        phone
    } = req.body;

    if (!fullName || !specialization || !experience || !email || !phone) {

        return res.status(400).json({
            success: false,
            message: "Please fill all fields."
        });

    }

    let doctors = [];

    if (fs.existsSync(filePath)) {

        doctors = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

    }

    const newDoctor = {

        id: Date.now(),
        fullName,
        specialization,
        experience,
        email,
        phone

    };

    doctors.push(newDoctor);

    fs.writeFileSync(
        filePath,
        JSON.stringify(doctors, null, 4)
    );

    res.status(201).json({

        success: true,
        message: "Doctor added successfully.",
        doctor: newDoctor

    });

};

// ======================================
// Get All Doctors
// ======================================

const getAllDoctors = (req, res) => {

    let doctors = [];

    if (fs.existsSync(filePath)) {

        doctors = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

    }

    res.status(200).json({

        success: true,
        count: doctors.length,
        doctors

    });

};
const getDoctorById = (req, res) => {

    const id = Number(req.params.id);

    let doctors = [];

    if (fs.existsSync(filePath)) {
        doctors = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }

    const doctor = doctors.find(item => item.id === id);

    if (!doctor) {
        return res.status(404).json({
            success: false,
            message: "Doctor not found."
        });
    }

    res.status(200).json({
        success: true,
        doctor
    });
};
const updateDoctor = (req, res) => {

    const id = Number(req.params.id);

    const {
        fullName,
        specialization,
        experience,
        email,
        phone
    } = req.body;

    let doctors = [];

    if (fs.existsSync(filePath)) {
        doctors = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }

    const doctorIndex = doctors.findIndex(item => item.id === id);

    if (doctorIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Doctor not found."
        });
    }

    doctors[doctorIndex] = {
        ...doctors[doctorIndex],
        fullName,
        specialization,
        experience,
        email,
        phone
    };

    fs.writeFileSync(
        filePath,
        JSON.stringify(doctors, null, 4)
    );

    res.status(200).json({
        success: true,
        message: "Doctor updated successfully.",
        doctor: doctors[doctorIndex]
    });

};
const deleteDoctor = (req, res) => {

    const id = Number(req.params.id);

    let doctors = [];

    if (fs.existsSync(filePath)) {
        doctors = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }

    const doctorIndex = doctors.findIndex(item => item.id === id);

    if (doctorIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Doctor not found."
        });
    }

    const deletedDoctor = doctors[doctorIndex];

    doctors.splice(doctorIndex, 1);

    fs.writeFileSync(
        filePath,
        JSON.stringify(doctors, null, 4)
    );

    res.status(200).json({
        success: true,
        message: "Doctor deleted successfully.",
        doctor: deletedDoctor
    });
};

module.exports = {
    addDoctor,
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
};