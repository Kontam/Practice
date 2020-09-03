import io from 'socket.io';

export class Connection {
  constructor(htServer) {
    this.connection = io(htServer);
  }

  connect() {
    this.connection.on('connection', (socket) => {
      console.log('a user connected');

      socket.emit('ferret', 'tobi', (data) => {
        console.log(data);
      });

      socket.on('hello', (name) => {
        console.log(name);
      });
    });
  } 
}
