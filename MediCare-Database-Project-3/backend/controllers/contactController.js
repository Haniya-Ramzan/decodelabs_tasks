const connection = require("../config/database");

// ======================================
// Send Contact Message
// ======================================

const sendMessage = (req, res) => {
console.log(req.body);
    const {
        fullName,
        email,
        phone,
        subject,
        message
    } = req.body;

    if (!fullName || !email || !phone || !subject || !message) {

        return res.status(400).json({
            success: false,
            message: "Please fill all fields."
        });

    }

    const sql = `
        INSERT INTO contact_messages
        (
            full_name,
            email,
            phone,
            subject,
            message
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [
            fullName,
            email,
            phone,
            subject,
            message
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
                message: "Message sent successfully.",
                contactId: result.insertId

            });

        }
    );

};
// ======================================
// Get All Contact Messages
// ======================================

const getAllMessages = (req, res) => {

    const sql = "SELECT * FROM contact_messages";

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
            messages: results

        });

    });

};

// ======================================

module.exports = {

    sendMessage,
    getAllMessages

};