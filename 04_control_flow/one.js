const temp=25
if(temp<30){
    console.log("Temperature is less than 30")
}else{
    console.log("Temperature is greater than 30")
}
console.log("Executed")


const score = 200
if(score>100){
    const power="Fly"
    console.log(`The user can ${power}`)
}

const bal=1000
// if(bal>500) console.log("Test"),
// console.log("Test2");
if(bal<500){
    console.log("Less than 500")
}else if(bal>500){
    console.log("Greater than 500")
}else if(bal===500){
    console.log("Is equal to 500")
}else{
    console.log("Invalid")
}


const isLoggedIn = true
const debitCard = false
const loggedInFromGoogle=true
const loggedInFromEmail=false

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User is logged in")
}

if(isLoggedIn && debitCard){
    console.log("Can proceed")
}else{
    console.log("Cannot proceed")
}

