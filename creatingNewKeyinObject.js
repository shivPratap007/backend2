

product={
    name:"Motorola",
    price:7000,
    size:"normal",
}
var data={key:"screen",value:"59 inches"};
var val=data.key
for(var value in product){
    if(product[data.key]){
        
    }
    else{
        product[data.key]=data.value
    }
}
for(var value in product){
    console.log(`${value}:${product[value]}`)
}

