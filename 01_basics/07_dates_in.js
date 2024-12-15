let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())

console.log(typeof myDate)

let myCreatedDate = new Date(2003,9,25)
console.log(myCreatedDate.toDateString())
let myBirthDate = new Date(2003,9,25,19,30)
console.log(myBirthDate.toLocaleString())
let anotherDate = new Date("2024-12-15")
console.log(anotherDate.toLocaleString())
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myBirthDate.getTime())

console.log(Math.floor(Date.now()/1000)) //converting miliseconds into seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getFullYear()) //Why 16? The time rn is 22:16? Why only minutes?

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate)