# Real-Time Chat Application

## Overview

A real-time messaging application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Socket.io for instant communication. The application enables users to send and receive messages in real-time, featuring authentication, one-on-one chats, and a seamless user experience.

## Features

### User Features
- JWT Authentication for secure login and registration
- Real-time messaging using Socket.io
- User search functionality to find and start conversations
- Live typing indicators
- Unread message notifications for offline messages
- Responsive design optimized for both desktop and mobile devices

### Admin Features
- User management dashboard for account oversight
- Message moderation capabilities (Future update)

## Tech Stack

### Frontend
- React.js with Zustand for state management
- Tailwind CSS for styling
- Axios for API calls

### Backend
- Node.js & Express.js
- MongoDB with Mongoose for database management
- JWT for authentication
- Socket.io for real-time communication

### Other Tools & Integrations
- Cloudinary for profile picture uploads
- bcrypt.js for password hashing
- Nodemailer for email verification & notifications

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/dheerendra45/chat-app
```

### 2. Install Dependencies

For Backend:
```bash
cd backend
npm install
```

For Frontend:
```bash
cd frontend
npm install
```

### 3. Environment Setup

Create a `.env` file in the backend directory with the following variables:

```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8080
SOCKET_PORT=5000
```

### 4. Launch the Application

Start the Backend:
```bash
cd backend
npm start
```

Start the Frontend:
```bash
cd frontend
npm run dev
```
## Upcoming Features

- Group chat functionality
- End-to-end encryption
- AI-powered chatbot integration
- Voice & video calls using WebRTC

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community for the amazing tools and libraries
