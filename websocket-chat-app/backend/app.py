from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')

@socketio.on('chat message')
def handle_chat_message(data):
    print('Received message on server:', data) 
    socketio.emit('chat message', data)  

@socketio.on('connect')
def handle_connect():
    print('Client Connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client Disconnected')

if __name__ == '__main__':
    socketio.run(app, port=5000)
