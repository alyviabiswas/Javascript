const promiseOne=new Promise(function(resolve,reject){
    //Do any async task
    //Make DataBase Calls, Cryptography related or network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed!")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two is complete")
        resolve()
    })
}).then(function(){
    console.log("Promise two consumed!")
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chaii", email:"chaiaurmaut@google.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve({username:"alyvia",password:"123456"})
        }else{
            reject("ERROR:something went wrong!")
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>
    console.log("Promise is either resolved or rejected")
)


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve({username:"javasript",password:"12345"})
        }else{
            reject("ERROR:JS went wrong!")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))