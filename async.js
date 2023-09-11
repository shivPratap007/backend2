function hello(){
    console.log("Event loop")
    setTimeout(()=>{
        console.log("This is async part");
    },4000)
    setTimeout(()=>{
        console.log("Second")
    },1000)
    
}
hello()
for(let i=0;i<100000;i++){
    console.log(i)
}
setTimeout(()=>{
    console.log("End")
},0)