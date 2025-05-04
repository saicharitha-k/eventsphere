
# 🎉 Event Sphere

**Event Sphere** is a smart event and club registration system tailored for colleges and organizations. It simplifies the process of event discovery, registration, payment, and ticketing—bringing everything under one unified platform.

---

## 🧠 Problem Statement

In many colleges and organizations, event registration is still handled manually or through disconnected tools like Google Forms, spreadsheets, and WhatsApp groups. There is no centralized system that integrates user registration, payments, and ticketing efficiently.

**Event Sphere** addresses this by offering a seamless solution with:
- A user-friendly interface for event discovery and registration
- QR-based payment integration
- Automatic ticket generation and confirmation

---

## 🎯 Target Audience

- College event coordinators and clubs
- Students and participants
- Admins managing multiple events or departments

---

## ✅ Functional Requirements

- User signup and login
- View available events
- Register for events
- Choose payment mode
- View QR and complete payment
- Generate and download tickets
- Admin: add/view/edit/delete events and registrations

---

## ⚙️ Non-Functional Requirements

- Secure user authentication
- Responsive design for mobile/desktop
- Reliable database performance
- Minimal load times

---

## 🚀 Features

- 🔐 Secure login/registration
- 📅 List of upcoming events
- 💳 Payment via QR Code (UPI-based)
- 🎫 Instant ticket generation after payment
- 🧑‍💼 Admin panel for event and registration management
- 📦 Scalable codebase for future enhancements

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Deployment**: (add here if you're using Render, Vercel, etc.)
- **Tools**: GitHub, VS Code, Postman

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/event-sphere.git
cd event-sphere
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root folder with:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
ABSTRACT_API_KEY=your_email_validation_api_key
```

### 4. Run the Server

```bash
node server.js
```

### 5. Open in Browser

```
http://localhost:3000
```

## 🧾 License

This project is licensed under the MIT License.

## 👩‍💻 Author

- Sai Charitha
- Saanvi
- Harini
