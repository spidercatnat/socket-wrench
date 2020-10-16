const { HELLO_SERVER, HELLO_CLIENT } = require("./socket-events");

module.exports = socket => {
  console.log("A client connected.");

  socket.on(HELLO_SERVER, async message => {
    console.log(message);
    socket.emit("CONTROL_SET", { key: "VOLUME", value: 67 });
    socket.emit("CONTROL_SET", { key: "PAN", value: 23 });
  });

  socket.on("error", error =>
    console.log("A socket error event occurred:", error)
  );

  socket.on("disconnect", _reason => {
    console.log("A client disconnected.");
  });
};
