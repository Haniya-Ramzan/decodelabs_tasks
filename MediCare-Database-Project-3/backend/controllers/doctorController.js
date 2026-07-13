const connection = require("../config/database");

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

    const sql = `
        INSERT INTO doctors
        (full_name, specialization, experience, email, phone)
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [fullName, specialization, experience, email, phone],
        (err, result) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });

            }

            res.status(201).json({

                success: true,
                message: "Doctor added successfully.",
                doctorId: result.insertId

            });

        }
    );

};

// ======================================
// Get All Doctors
// ======================================

const getAllDoctors = (req, res) => {

    const sql = "SELECT * FROM doctors";

    connection.query(sql, (err, results) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        res.status(200).json({

            success: true,
            count: results.length,
            doctors: results

        });

    });

};

// ======================================
// Get Doctor By ID
// ======================================

const getDoctorById = (req, res) => {

    const id = req.params.id;

    const sql = "SELECT * FROM doctors WHERE doctor_id = ?";

    connection.query(sql, [id], (err, results) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        if (results.length === 0) {

            return res.status(404).json({
                success: false,
                message: "Doctor not found."
            });

        }

        res.status(200).json({

            success: true,
            doctor: results[0]

        });

    });

};

// ======================================
// Update Doctor
// ======================================

const updateDoctor = (req, res) => {

    const id = req.params.id;

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

    const sql = `
        UPDATE doctors
        SET
            full_name = ?,
            specialization = ?,
            experience = ?,
            email = ?,
            phone = ?
        WHERE doctor_id = ?
    `;

    connection.query(
        sql,
        [fullName, specialization, experience, email, phone, id],
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
                    message: "Doctor not found."
                });

            }

            res.status(200).json({

                success: true,
                message: "Doctor updated successfully."

            });

        }
    );

};

// ======================================
// Delete Doctor
// ======================================

const deleteDoctor = (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM doctors WHERE doctor_id = ?";

    connection.query(sql, [id], (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        if (result.affectedRows === 0) {

            return res.status(404).json({
                success: false,
                message: "Doctor not found."
            });

        }

        res.status(200).json({

            success: true,
            message: "Doctor deleted successfully."

        });

    });

};

module.exports = {
    addDoctor,
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
};