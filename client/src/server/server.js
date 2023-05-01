const io = require('socket.io')(3002, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

let activeSessions = 0;

io.on('connect', (socket) => {
  console.log('New client connected');

  activeSessions++;
  io.emit('activeSessions', activeSessions);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    activeSessions--;
    io.emit('activeSessions', activeSessions);
  });
});
