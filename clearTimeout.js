var timer1=setTimeout(()=>{
    console.log("First");
},1000)

var timer2=setTimeout(()=>{
    console.log("Second");
    
},7000)

clearTimeout(timer1)