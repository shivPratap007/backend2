console.log("Starting the program")

function onenYT(url){
    return new Promise((resolve,reject)=>{
        console.log("URL is recieved");
        let content=`Content of this url ${url} is Shiv Pratap`;
        resolve(content);
    })
}

function watch(content){
    return new Promise((resolve,reject)=>{
        console.log("Showing Content");
        let Platform="yt";
        resolve(Platform);
    })
}


onenYT("Backend Development")
.then((value)=>{
    console.log(`The content is:${value}`)
    return watch(value);
})
.then((data)=>{
    console.log(`This is the platform on which you are watching the content:${data}`)
})

console.log("Ending the program");