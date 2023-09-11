function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}
var apiKey=generateKey();

let url='https://api.boot.dev/v1/courses_rest_api/learn-http/items';

async function getData(url){
    let data=await fetch(url,{
        method: 'GET',
        mode: 'cors',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        }
    })
    let returnedData=await data.json();
    return returnedData;
}

getData(url)
.then(value=>{
    value.map((item)=>{
        console.log(item.name)
    })
})

