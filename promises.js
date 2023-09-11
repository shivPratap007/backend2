function promise(url){
    return new Promise((resolve,reject)=>{
        console.log("Trying to fetch the data");
        setTimeout(()=>{
            var data="My name is don";
            console.log("Data resolved successfully");
            resolve(data);
        },5000)
    })
}

promise("www.google.com")
.then((value)=>{
    console.log(value)
})