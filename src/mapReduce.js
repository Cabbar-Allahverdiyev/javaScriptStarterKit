let cart=[
    {id:1,productName:"Telefon",quantity:3,unitPrice:400},
    {id:2,productName:"Stekan",quantity:2,unitPrice:20},
    {id:3,productName:"Qelem",quantity:1,unitPrice:15},
    {id:4,productName:"Kitab",quantity:2,unitPrice:35},
]
cart.map(product=>{
    console.log(product.productName+" : "+product.unitPrice*product.quantity)
});

let quantityOver2=cart.filter(product=>product.quantity>2)

console.log(quantityOver2)

let total=cart.reduce((acc,product)=>acc+product.unitPrice,0);