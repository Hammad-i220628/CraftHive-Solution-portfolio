const nodemailer = require("nodemailer");
const multer = require("multer");
const Contact = require("../Models/Contact");
const path = require("path");

// Set up Multer Storage Engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Add timestamp to avoid overwriting
  },
});

const upload = multer({ storage: storage });

// Email sending function using Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Your Gmail
    pass: process.env.PASSWORD, // Gmail App Password
  },
});

const sendEmailWithAttachment = async (email, subject, message, filePath) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECEIVER_EMAIL, // Receiver's email
      subject: subject,
      text: `Email: ${email}\nMessage: ${message}`,
      attachments: filePath ? [{ path: filePath }] : [], // Attach file only if provided
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

// Controller for handling the contact form submission
exports.sendContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const filePath = req.file ? req.file.path : null; // Ensure file exists

    // Save contact details in MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email (with or without attachment)
    await sendEmailWithAttachment(
      email,
      "New Contact Form Submission",
      message,
      filePath
    );

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ success: false, message: "Error sending message" });
  }
};

// Export Multer middleware so it can be used in routes
exports.upload = upload;
