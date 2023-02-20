console.log(12+'3')
console.log(12-'2')
console.log(12*'3')
console.log(12/'3')
console.log(12%'3')
console.log(12-'s')
console.log(false-12)
console.log(12+true)

// Explicit conversion

// Number String boolean

var x='993JDBC'
var y=parseInt(x)
console.log(y)
console.log(typeof(y));
console.log('__________Number____________')

 var j=Number(false)// Number(true)  Number(flase)  Number("hi")--> NaN [not a number]
console.log(j)
console.log(typeof(j))




console.log("_______String________")

 let z=String(true) // String(false) String(1234)  String(null) String(undefined) String('kill')
console.log(z)
console.log(typeof(z))


console.log('_________Boolean_________')
var c=Boolean("hi")  //Boolean(1234) Boolean(false) Boolean(true) Boolean(null) Boolean('') 
console.log(c)
console.log(typeof(c))