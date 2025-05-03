const sendWelcomeEmail = require('./mailer'); // Import this at the top
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

const USERS_FILE = "users.json";

app.use(cors());
app.use(express.json());

// Ensure users.json exists
if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

// Signup route
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Missing email or password.");
  }

  const users = JSON.parse(fs.readFileSync(USERS_FILE));
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return res.status(409).send("❌ User already exists.");
  }

  users.push({ email, password }); // In production, hash the password
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  console.log("✅ User registered:", email);
  res.status(201).send("✅ Signup successful!");
  sendWelcomeEmail(email);
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password." });
  }

  const users = JSON.parse(fs.readFileSync(USERS_FILE));
  const user = users.find((u) => u.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "❌ Invalid email or password." });
  }

  console.log("✅ Login successful:", email);
  res.status(200).json({ message: "✅ Login successful!" });
});


// Start the server
app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});