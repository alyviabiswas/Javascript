// Types of Data: Primitive and Non-primitive

// Primitive
// 7 types: String, Number, Boolean, null, undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.5
// Both are numbers

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Declaration of Symbols
const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1==id2)

// Declaration of BigInt
const BigValue = 29845897353982394438n
console.log(typeof BigValue)


// Non-Primitive(Reference)
// Arrays, Objects, Functions

//Declaration of Arrays
const heroes = ["SpiderMan","IronMan","Wolverine","BlackWidow"]

// Declaration of Objects
const myObj = {
    name: "Alyvia",
    age: 22,
}

// Declaring a function
const myFunction = function(){
    console.log("Hello Alyvia!")
}

console.log(typeof myFunction)