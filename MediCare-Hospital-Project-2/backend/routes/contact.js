const express = require("express");

const router = express.Router();

const {
    sendMessage,
    getAllMessages
} = require("../controllers/contactController");

// ======================================
// GET All Contact Messages
// ======================================

router.get("/", getAllMessages);

// ======================================
// POST Contact Message
// ======================================

router.post("/", sendMessage);

module.exports = router;