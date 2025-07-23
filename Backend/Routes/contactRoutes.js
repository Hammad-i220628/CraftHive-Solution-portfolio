const express = require("express");
const { sendContactForm, upload } = require("../Controllers/contactControler");
const router = express.Router();

// Define the route for sending contact form
router.post("/sendContactForm", upload.single("file"), sendContactForm);
module.exports = router;
