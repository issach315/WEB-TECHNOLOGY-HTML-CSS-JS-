let num=10
var num1=11


// for var reinitialization is possible 

var apple=2;
apple=3;
console.log(apple)
//  for let reinitialization is possible 
let mango=5
mango=6
console.log(mango);


// for const reinitialization is not possible

const pi=3.14;

// pi=2.14
console.log(pi)


// block level accesing var

{
    var money=14
    console.log(money)
}

console.log(money)

// block level accesing let

{
    let password=12476432

    console.log(password)
}

//---->>> console.log(password) Accessing is possible inside block only


// before initialization


console.log(banana)
var banana="yellow"

console.log(banana)

console.log(grape)
let grape="purple"
console.log(grape)



