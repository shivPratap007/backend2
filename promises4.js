function promise1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This is the data");
        },2000)
    })
}

console.log("Starting the program");

setTimeout(()=>{
    console.log("I am from second setTimeout");
    let y=promise1();
    y.then(function Promise1(value){
        console.log(value)
    })
})

let x=Promise.resolve("This is a just in time executing promise");
x.then(function jit(value){
    console.log(value);
})

setTimeout(()=>{
    console.log("This is form the timer two");
},0)

console.log("Ending the program")

