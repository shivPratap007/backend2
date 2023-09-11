const socket=io();

let btn=document.getElementById("btn");
let msg=document.getElementById('msg');
let list=document.getElementById('lst');

btn.addEventListener('click',()=>{
    socket.emit('from_client',{
        message:msg.value,
    })
})

socket.on('msg_recieved',(obj)=>{
    let listmsg=document.createElement('li');
    listmsg.innerText=obj.message;
    list.appendChild(listmsg);
})
