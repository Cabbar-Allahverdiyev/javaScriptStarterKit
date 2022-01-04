<<<<<<< HEAD
let student ={id:1,name:"Cabbar"}


function save(telebe,bal =10) {

    console.log(telebe.name+ ":  "+bal)
}

//save(student);
let students=["Cabbar","Murad","Seymur"];
//console.log(students)

let students2=[student,{id:4,name:"Behruz"}]
//console.log(students2)

let showProducts=function (id,...products) {
    console.log(id)
    console.log(products[1])
}

//showProducts(10,"Alma","armud","qarpiz");

let points=[1,5,8,45,65,12,32]
//console.log(...points)

//console.log(..."abc","d",..."efg","h")

//destruractring
let popilations=[400,4500,10000]
let [small,medium,high]=popilations

console.log(name1(3,6,8,122,450,300))

function name1() {
    let max=0
    for (let i = 0; i < arguments.length; i++) {
       if (arguments[i]>max) {
           max=arguments[i]
       }
        
    }
    return max
}

//continue



=======
console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
