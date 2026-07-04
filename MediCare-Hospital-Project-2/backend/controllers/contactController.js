const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/messages.json");

// ======================================
// Send Contact Message
// ======================================

const sendMessage = (req, res) => {

    const {
        fullName,
        email,
        subject,
        message
    } = req.body;

    if (!fullName || !email || !subject || !message) {

        return res.status(400).json({
            success: false,
            message: "Please fill all fields."
        });

    }

    let messages = [];

    if (fs.existsSync(filePath)) {

        messages = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

    }

    const newMessage = {

        id: Date.now(),
        fullName,
        email,
        subject,
        message

    };

    messages.push(newMessage);

    fs.writeFileSync(
        filePath,
        JSON.stringify(messages, null, 4)
    );

    res.status(201).json({

        success: true,
        message: "Message sent successfully.",
        contact: newMessage

    });

};

// ======================================
// Get All Contact Messages
// ======================================

const getAllMessages = (req, res) => {

    let messages = [];

    if (fs.existsSync(filePath)) {

        messages = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

    }

    res.status(200).json({

        success: true,
        count: messages.length,
        messages

    });

};

module.exports = {

    sendMessage,
    getAllMessages

};