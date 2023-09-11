function downloadData(url){
    return new Promise((resolve,reject)=>{
        if(!url){
            reject(new Error("NO URL AVAILABEL")); //We are throwing the error form here
        }
        setTimeout(()=>{
            resolve("This is a private data we dont give it easily");
        },5000)
    })
}

downloadData()
.then(function gettingData(value){
    console.log(value);
})
.catch(error=>{
    console.log(error)// It is catching the eror here
})