const app = require('express')();
// const express = require('express');
// const app = express();

const server = require('http').createServer(app);
const port = 8000;
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
});

io.on("connection", (socket) => {
    console.log("what is socket : ", socket);
    
    socket.on("chat", (payload) => {
        console.log("what is payload : ", payload);
        io.emit("chat", payload);
    })
})

server.listen(port, () => {
    console.log(`server is listening at ${port}`);
})
