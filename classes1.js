class Product{
    discount=23;
    constructor(n,p){
        this.name=n;
        this.price=p;
    }
    displayProduct(){
        console.log(this.name,this.price,this.discount);
    }
}

// let iphone=new Product("iphone",120000);
// console.log(iphone);
// let obj={
//     name:iphone.name,
//     price:iphone.price,
// }
// console.log(obj)

function product(n,p){
    this.name=n;
    this.price=p;
}
let samsung=new product("Samsung",50000);
console.log(samsung);


let motorola=new Product("Motorola",10000);
motorola.displayProduct()