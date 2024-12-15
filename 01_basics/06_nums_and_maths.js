const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(2))

const otherNumber = 456.45
console.log(otherNumber.toPrecision(4))

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))



// MATHS

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.67))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.8))
console.log(Math.min(3,5,7,2))
console.log(Math.max(8,7,3,4))

console.log(Math.random())
console.log(Math.random()*10+1)
console.log((Math.random()*10)+1)

const max=30
const min=10
console.log(Math.floor(Math.random()*(max-min+1))) //gives value between [0,(max-min)]
console.log(Math.floor(Math.random()*(max-min+1))+min) //gives value between [max,min]

