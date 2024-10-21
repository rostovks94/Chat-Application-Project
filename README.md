# WebSocket Chat Application

## Overview
This is a real-time chat application built using Flask-SocketIO for the backend and React with TypeScript for the frontend. The project supports real-time communication via WebSockets, allowing users to send and receive messages in a chatroom in real-time. The application was developed as part of the bootcamp program at **Coding Temple**, showcasing my practical skills in both front-end and back-end development.

## Features
- **Real-Time Messaging**: Allows users to send and receive messages instantly using WebSocket technology.
- **Structured Pages**: Includes components such as the chat room and input forms for sending messages.
- **Responsive Design**: The application adapts to different screen sizes, from desktops to mobile devices.
- **User Timestamps**: Displays usernames and timestamps for each message sent in the chatroom.
- **Frontend-Backend Integration**: Real-time communication between Flask-SocketIO backend and React frontend.
- **Local and Cloud Hosting**: The backend can be run locally, while the frontend is deployed on Vercel.

## Technologies Used
- **Frontend**: React, TypeScript, Vite
- **Backend**: Flask, Flask-SocketIO
- **WebSocket**: Flask-SocketIO, socket.io-client
- **Deployment**: Vercel (Frontend), Localhost for Backend

## Running the Project Locally

### Backend (Flask-SocketIO)

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rostovks94/Chat-Application-Project.git
   cd Chat-Application-Project/websocket-chat-app/backend
   
2. **Create a virtual environment and activate it**:
   
   On Windows:
   ```bash python -m venv venv
   venv\Scripts\activate```

   On macOS/Linux:
  
   ```bash python3 -m venv venv
   source venv/bin/activate```

3. **Install the dependencies**:
   
   ```bash
   pip install -r requirements.txt```
