

// let customer={id:1,firstName:"Cabbar"}

// customer.lastName="Alahverdiyev"

// console.log("-------------------------")

const array1=[1,2,3,4,5,6]
const result1=array1.every(function (number,index,arr) {
    //console.log(index,arr)
     return number>1;
})
//console.log(result1)

const names = ['tayfun', 'cem', 'ece', 'burak', 'gül', 'mehmet', 'neşe'];

//---------------Filter---------------
let arr1=names.filter(name=>name.length<=4)
//console.log(arr1)

//---------------Includes-------------
//console.log(names.filter(name=>name.includes()))
const search=(keyword,array)=>array.filter(item=>item.toLowerCase().includes(keyword.toLowerCase()))
//console.log(search("cE",names))

//--------------Map-------------------
//console.log(names.map(name=>name.includes("k")))

const array2 = ['1', '2', '3'];
//console.log(array2.map(Number));

//--------------Unshift-------------
const array3 = [1, 2, 3];

//console.log(array1.unshift(4, 5));
// 5 (dizinin yeni uzunluğu)

//console.log(array1);
// [4, 5, 1, 2, 3]

//-------------Push-----------
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')
//console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
//console.log(total); // 4