const { Server } = require("socket.io");

const io = new Server(3000, {
  cors: true,
});

const emailToSocket = new Map();
const socketToEmail = new Map();

io.on("connection", (socket) => {
  console.log("Client Joined the Server", socket.id);
  socket.on("join", (data) => {
    const { em, r } = data;
    const email = em;
    const room = r;
    emailToSocket.set(email, socket.id);
    socketToEmail.set(socket.id, email);
    io.to(socket.id).emit("join", { email, room });
  });
  socket.on("all", (data) => {
    io.emit("sentall", data);
  });
});
