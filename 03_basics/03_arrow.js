const user = {
    username:"alyvia",
    price:899,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to this website!`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="Harry"
// user.welcomeMessage()
console.log(this) // In a node environment 'this' refers to empty

// function chai(){
//     let username="alyvia"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username="alyvia"
//     console.log(this.username)
// }
const chai = ()=>{
    let username="alyvia"
    console.log(this)
}
// chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// const addTwo = (num1,num2) =>num1+num2 //Implicit
// const addTwo = (num1,num2) => (num1+num2)
const addTwo = (num1,num2)=>({username:"Alyvia"})
console.log(addTwo(3,4))
