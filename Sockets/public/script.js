var socket=io();
let btn=document.getElementById('btn');

socket.on('from_server',(message)=>{
    console.log('collected a new event from server');
    const div=document.createElement('div');
    div.innerHTML=message;
    document.body.appendChild(div);
})

btn.addEventListener('click',()=>{
    socket.emit('from_client');
})


socket.on('from_server2',()=>{
    console.log("Message recieved");
})
