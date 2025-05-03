require("dotenv").config();

console.log("ENV EMAIL_USER:", process.env.EMAIL_USER);
console.log("ENV EMAIL_PASS:", process.env.EMAIL_PASS ? "Exists ✅" : "Missing ❌");

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendWelcomeEmail = (toEmail) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: "Welcome to EventSphere!",
    text: `Hello 👋,

Thanks for signing up with EventSphere! 🎉

We'll keep you updated on upcoming events and reminders for ones you've registered for.

Happy Exploring! 🌟

- EventSphere Team`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
    } else {
      console.log("📧 Email sent:", info.response);
    }
  });
};

module.exports = sendWelcomeEmail;