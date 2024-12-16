// OBJECT LITERALS
const mySym=Symbol("key1")
const JsUser = {
    name:"Alyvia",
    [mySym]:"myKey1",
    age:21,
    location:"Kolkata",
    email:"alyvia@yahoo.com",
    isLoggedIn:false,
    lastLoggedInDays:["Thursday","Friday"],
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

JsUser.email = "alyvia@google.com" //changing the value
console.log(JsUser)

// Object.freeze(JsUser) //freezing the value of an object
// JsUser.email = "alyvia@microsoft.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user!!");
}
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greetingTwo())