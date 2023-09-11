function DataDownloader(url){
    return new Promise((resolve,reject)=>{
        console.log("Entering into yt");
        setTimeout(()=>{
            console.log(`Downloading the data form ${url}`);
            let data="Shiv Pratap";
            resolve(data);
            console.log("Download Complete");
        },5000)
    })
}

function uploadData(data){
    return new Promise((resolve,reject)=>{
        console.log("Entering upload database");
        setTimeout(()=>{
            console.log("Uploading start");
            resolve("Uploading done");
        })
    })
}

async function process(){
    let data1=await DataDownloader("yt.com");
    let upload=await uploadData(data1);
    return upload;
}

process()
.then(value=>{
    console.log(value);
})