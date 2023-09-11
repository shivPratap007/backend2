function callback1(value,func){
    setTimeout(()=>{
        func(value);
    },6000)
}
function callback2(value,func){
    setTimeout(()=>{
        func(value);
    },6000)
}
function callback3(value,func){
    setTimeout(()=>{
        func(value);
    },6000)
}
function callback4(value,func){
    setTimeout(()=>{
        func(value)
    },6000)
}

callback1("Shiv",(value)=>{
    console.log(value);
    callback2(value+" Pratap",(value2)=>{
        console.log(value2);
        callback3(value2+" Singh",(value3)=>{
            console.log(value3);
            callback4(value3+" Waghel",(value)=>{
                console.log(value);
            })
        })
    })
})