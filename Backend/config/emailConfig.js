const nodemailer = require('nodemailer');

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Your email (should be in .env)
    pass: process.env.PASSWORD, // App password for Gmail (should be in .env)
  },
});

// Send email with attachment
const sendEmailWithAttachment = async (email, subject, message, filePath) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.RECEIVER_EMAIL,  // The email where you'll receive notifications
      subject: subject,
      text: `Email: ${email}\nMessage: ${message}`,
      attachments: [
        {
          path: filePath, // Path to uploaded file
        }
      ],
    });

    console.log('✅ Email sent successfully');
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};

module.exports = sendEmailWithAttachment;
