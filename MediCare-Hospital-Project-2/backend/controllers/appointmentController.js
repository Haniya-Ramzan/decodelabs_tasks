const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/appointments.json");

// ======================================
// Book Appointment
// ======================================

const bookAppointment = (req, res) => {

    const {
        fullName,
        email,
        phone,
        department,
        date
    } = req.body;

    if (!fullName || !email || !phone || !department || !date) {

        return res.status(400).json({
            success: false,
            message: "Please fill all fields."
        });

    }

    let appointments = [];

    if (fs.existsSync(filePath)) {

        appointments = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

    }

    const newAppointment = {

        id: Date.now(),
        fullName,
        email,
        phone,
        department,
        date

    };

    appointments.push(newAppointment);

    fs.writeFileSync(
        filePath,
        JSON.stringify(appointments, null, 4)
    );

    res.status(201).json({
        success: true,
        message: "Appointment booked successfully!",
        appointment: newAppointment
    });

};

// ======================================
// Get All Appointments
// ======================================

const getAllAppointments = (req, res) => {

    let appointments = [];

    if (fs.existsSync(filePath)) {

        appointments = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

    }

    res.status(200).json({
        success: true,
        count: appointments.length,
        appointments
    });

};

// ======================================
// Get Appointment By ID
// ======================================

const getAppointmentById = (req, res) => {

    const id = Number(req.params.id);

    let appointments = [];

    if (fs.existsSync(filePath)) {

        appointments = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

    }

    const appointment = appointments.find(item => item.id === id);

    if (!appointment) {

        return res.status(404).json({
            success: false,
            message: "Appointment not found."
        });

    }

    res.status(200).json({
        success: true,
        appointment
    });

};
// ======================================
// Update Appointment
// ======================================

const updateAppointment = (req, res) => {

    const id = Number(req.params.id);

    const {
        fullName,
        email,
        phone,
        department,
        date
    } = req.body;

    let appointments = [];

    if (fs.existsSync(filePath)) {

        appointments = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

    }

    const appointmentIndex = appointments.findIndex(
        item => item.id === id
    );

    if (appointmentIndex === -1) {

        return res.status(404).json({
            success: false,
            message: "Appointment not found."
        });

    }

    appointments[appointmentIndex] = {

        ...appointments[appointmentIndex],

        fullName,
        email,
        phone,
        department,
        date

    };

    fs.writeFileSync(
        filePath,
        JSON.stringify(appointments, null, 4)
    );

    res.status(200).json({

        success: true,
        message: "Appointment updated successfully.",
        appointment: appointments[appointmentIndex]

    });

};
// ======================================
// Delete Appointment
// ======================================

const deleteAppointment = (req, res) => {

    const id = Number(req.params.id);

    let appointments = [];

    if (fs.existsSync(filePath)) {

        appointments = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

    }

    const appointmentIndex = appointments.findIndex(
        item => item.id === id
    );

    if (appointmentIndex === -1) {

        return res.status(404).json({
            success: false,
            message: "Appointment not found."
        });

    }

    const deletedAppointment = appointments[appointmentIndex];

    appointments.splice(appointmentIndex, 1);

    fs.writeFileSync(
        filePath,
        JSON.stringify(appointments, null, 4)
    );

    res.status(200).json({

        success: true,
        message: "Appointment deleted successfully.",
        appointment: deletedAppointment

    });

};
// ======================================

module.exports = {

    bookAppointment,
    getAllAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment

};