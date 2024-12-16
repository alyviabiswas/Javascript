// const tinderUser=new Object() //declaring a singleton object

const tinderUser={}
tinderUser.id="abc123"
tinderUser.name="Harry"
tinderUser.isLoggedIn=true
console.log(tinderUser)

const regularUser={
    email:"alyvia@google.com",
    username:{
        fullname:{
            firstname:"Alyvia",
            lastname:"Biswas",
        }
    }
}
console.log(regularUser)
console.log(regularUser.username.fullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3)
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// OBJECT DE-STRUCTURE

const course = {
    coursename:"JavaScript",
    courseprice:599,
    courseinstructor:"Hitesh",
}
const {courseinstructor:instructor}=course
console.log(instructor)

// JSON APIs

// {
//     "name":"Hitesh",
//     "coursename":"JavaScript",
//     "price":599,
// }

[
    {},
    {},
    {}
]
