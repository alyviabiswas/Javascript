function myName(){
    console.log("A");
    console.log("L");
    console.log("Y");
    console.log("V");
    console.log("I");
    console.log("A");
}
myName()


// function addTwoNumbers(number1,number2){ //parameters
//     console.log(number1+number2);
// }
// addTwoNumbers(4,3)
// addTwoNumbers(4,"3")
// addTwoNumbers(4,null)

function addTwoNumbers(number1,number2){ //parameters
    // let result = number1+number2
    // return result //nothing will be executing after return
    return number1+number2
}

const result=addTwoNumbers(4,3) //arguments

console.log("Result:",result)

function logInUserMessage(username="Harry"){
    if(!username){   // if(username===undefined)
        console.log("Please enter a username:")
        return
    }
    return `${username} just logged in!`
}
console.log(logInUserMessage("Alyvia"))
//console.log(logInUserMessage())


// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(199,299,599,2999))

const user={
    username:"Alyvia",
    price:599
}
function handleObject(anyobject){
    console.log(`Username ${anyobject.username} has cart price ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username:"Alyvia",
    price:699
})

const myNewArray=[399,499,999]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))