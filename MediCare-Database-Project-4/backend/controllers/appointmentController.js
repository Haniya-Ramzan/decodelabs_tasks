const connection = require("../config/database");

// ======================================
// Book Appointment
// ======================================

const bookAppointment = (req, res) => {

    const {
        fullName,
        email,
        phone,
        department,
        date,
        time,
        concern
    } = req.body;

    if (
        !fullName ||
        !email ||
        !phone ||
        !department ||
        !date ||
        !time ||
        !concern
    ) {
        return res.status(400).json({
            success: false,
            message: "Please fill all fields."
        });
    }

    const sql = `
        INSERT INTO appointments
        (
            full_name,
            email,
            phone,
            department,
            appointment_date,
            appointment_time,
            message
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [
            fullName,
            email,
            phone,
            department,
            date,
            time,
            concern
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Appointment booked successfully!",
                appointmentId: result.insertId
            });

        }
    );

};

// ======================================
// Get All Appointments
// ======================================

const getAllAppointments = (req, res) => {

    connection.query(
        "SELECT * FROM appointments",
        (err, results) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(200).json({
                success: true,
                count: results.length,
                appointments: results
            });

        }
    );

};

// ======================================
// Get Appointment By ID
// ======================================

const getAppointmentById = (req, res) => {

    const id = req.params.id;

    connection.query(
        "SELECT * FROM appointments WHERE appointment_id = ?",
        [id],
        (err, results) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            if (results.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Appointment not found."
                });
            }

            res.status(200).json({
                success: true,
                appointment: results[0]
            });

        }
    );

};

// ======================================
// Update Appointment
// ======================================

const updateAppointment = (req, res) => {

    const id = req.params.id;

    const {
        fullName,
        email,
        phone,
        department,
        date,
        time,
        concern
    } = req.body;

    if (
        !fullName ||
        !email ||
        !phone ||
        !department ||
        !date ||
        !time ||
        !concern
    ) {
        return res.status(400).json({
            success: false,
            message: "Please fill all fields."
        });
    }

    const sql = `
        UPDATE appointments
        SET
            full_name = ?,
            email = ?,
            phone = ?,
            department = ?,
            appointment_date = ?,
            appointment_time = ?,
            message = ?
        WHERE appointment_id = ?
    `;

    connection.query(
        sql,
        [
            fullName,
            email,
            phone,
            department,
            date,
            time,
            concern,
            id
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Appointment not found."
                });
            }

            res.status(200).json({
                success: true,
                message: "Appointment updated successfully."
            });

        }
    );

};

// ======================================
// Delete Appointment
// ======================================

const deleteAppointment = (req, res) => {

    const id = req.params.id;

    connection.query(
        "DELETE FROM appointments WHERE appointment_id = ?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Appointment not found."
                });
            }

            res.status(200).json({
                success: true,
                message: "Appointment deleted successfully."
            });

        }
    );

};

module.exports = {
    bookAppointment,
    getAllAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
};