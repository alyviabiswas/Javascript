const user={
    username:"alyvia",
    logInCount:7,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Get user details from database")
        // console.log(`User:${this.username}`)
        console.log(this)
    }
}
// console.log(user.username)
// // console.log(user.getUserDetails())
// console.log(this)

function User(username,logInCount,isLoggedIn){
    this.username=username
    this.logInCount=logInCount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome, this.${username}`)
    }

    return this //even if we don't return this here, this is returned implicitly
}
const userOne=new User("alyvia",7,true)
const userTwo=new User("ChaiAurMaut",5,false)
console.log(userOne.constructor)
// console.log(userTwo)