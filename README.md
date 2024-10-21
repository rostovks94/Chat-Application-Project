# WebSocket Chat Application

## Overview
This is a real-time chat application built using Flask-SocketIO for the backend and React with TypeScript for the frontend. The project supports real-time communication via WebSockets, allowing users to send and receive messages in a chatroom in real-time. The application was developed as a homework assignment during the bootcamp program at **Coding Temple**, showcasing my practical skills in both front-end and back-end development.

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
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```
   On macOS/Linux:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. **Install the dependencies**:
   
   ```bash
   pip install -r requirements.txt

4. **Run the backend server**:
   
   ```bash
   python app.py

The server will start on http://127.0.0.1:5000.

### Frontend (React)

1. **Navigate to the frontend directory**:

   ```bash
   cd ../frontend/app

2. **Install the dependencies**:

   ```bash
   npm install

3. **Run the development server**:
   
   ```bash
   npm run dev

The frontend will run on http://localhost:3000.  

Through Vercel:
The frontend of the application is deployed on Vercel. You can access it via the following link:

https://chat-application-project-3wiq0q7oz-rostovks94s-projects.vercel.app


### Project Structure

```bash
/websocket-chat-app
├── backend
│   ├── app.py              
│   └── requirements.txt     
├── frontend/app
│   ├── src
│   │   ├── components
│   │   │   ├── ChatBody.tsx     
│   │   │   └── MessageInput.tsx 
│   │   ├── App.tsx              
│   │   └── main.tsx             
│   ├── public
│   │   └── index.html          
│   └── package.json            
└── README.md
```

### Conclusion
This real-time chat application demonstrates the use of Flask-SocketIO for backend WebSocket communication and React with TypeScript for the frontend. The project was developed as part of the Coding Temple bootcamp and is designed to showcase full-stack web development skills.

Feel free to reach out if you have any questions or suggestions.
