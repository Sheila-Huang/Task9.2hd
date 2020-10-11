const express=require('express')
//const { Socket } = require('dgram')
const cors = require('cors');
const app=express()
app.use('*',cors());
const server=require('http').Server(app)
const io=require("socket.io")(server)
// const socket = require('socket.io')
//   const io = socket(server)
io.on('connection',socket=>{

    console.log("Connected")

     socket.on('play',playMsg=>{

        io.emit("play",playMsg)
    })
    socket.on("stop",msg=>io.emit("stop"))
})

// app.use(express.static(path.join(__dirname, 'build')));


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

server.listen(port, (req,res)=>{
    console.log("Server is running successfullly!")
})

//server.listen(8000)