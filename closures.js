// function outerFunc(){
//     outerVariable="I am from outside";
//     function innerFunc(){
//         console.log(outerVariable);
//     }
//     return innerFunc;
// }

// var returnedValue=outerFunc();

// returnedValue();
// outerVariable="Value has been changed"


// function todo(task){
//     console.log(task)
    
//     setTimeout(()=>{
//         console.log(task);
//     },5000)
//     task="Homework";
// }
// todo("Assignment")


// function func(){
//     for(var i=0;i<3;i++){
//         console.log("hello")
//         setTimeout(function exec(){
//             console.log(`i:${i}`)
//         },i*2000)
//     }
// }
// func()


// function func(){
//     let a="Hello";
//     setTimeout(()=>{
//         console.log(a)
//     },5000)
// }
// func()
// a="Hi"

let add=(function one(){
    let counter=0;
    return function two(){
        counter+=1
        return counter
    }
})()
console.log(add())
console.log(add())