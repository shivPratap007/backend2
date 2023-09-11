const express=require("express");
const http=require('http');
const socketio=require('socket.io');

const app=express();
const server=http.createServer(app);
const io=socketio(server);

app.use('/',express.static(__dirname+'/public/')) 


io.on('connection',(socket)=>{
    console.log("A new user is connected ",socket.id);

    socket.emit("from_server",'This is the real message send from the server');

    socket.on('from_client',()=>{
        console.log("This message is from the client");
    })

    setInterval(()=>{
        socket.emit('from_server2');
    },3000)
})

server.listen(7000,()=>{
    console.log('App is running on port no. 7000');
    
})
