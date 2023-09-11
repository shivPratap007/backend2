// Working with try catch

function trycatch(val){
    return new Promise((resolve,reject)=>{
        if(val==="hero"){
            resolve(true)
        }else{
            reject(false);
        }
    })
}

function trycatch2(val2){
    return new Promise((resolve,reject)=>{
        if(val2==="Hero2"){
            resolve(true)
        }else{
            reject(false);
        }
    })
}

// trycatch("ero")
// .then(value=>{
//     console.log(value);
//     return trycatch2("Hero")
// })
// .then((value)=>{
//     console.log(value)
// })

// .catch(error=>{
//     console.log(error)
// })

async function getter(){
    try{
        let data1=await trycatch("hero2");
        console.log(data1)
    }catch(error){
        console.log(new Error(error))
    }
}
getter()