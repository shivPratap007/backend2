const express=require("express");
const http=require('http');
const socketio=require('socket.io');

const app=express();
const server=http.createServer(app);
const io=socketio(server);

app.use('/',express.static(__dirname+'/public/')) 


io.on('connection',(socket)=>{


    socket.on('from_client',(obj)=>{
        console.log(obj.message);
        //socket.emit('msg_recieved',obj); It will send the reply only to the one which has send the message
        // io.emit('msg_recieved',obj); // It is going to send the obtained data to all the others who are join on this server
        socket.broadcast.emit('msg_recieved',obj); // It will send the message to everyone except to the one which originally send the message
    })

    
})

server.listen(7000,()=>{
    console.log('App is running on port no. 7000');
    
})
