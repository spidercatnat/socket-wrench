const Socket = require('socket.io');

const socketListeners = require('./socket-listeners');

const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT || 9998;

module.exports = async function({ app }) {
    const server = require('http').createServer(app);
    const io = new Socket(server);
    io.on('connection', socketListeners);
    server.listen(WEBSOCKET_PORT, () => {
        console.log(
            `WebSocket server is listening for inbound messages at port ${WEBSOCKET_PORT}`
        );
    });
    return io;
};






