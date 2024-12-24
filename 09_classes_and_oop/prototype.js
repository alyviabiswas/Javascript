// let myName="alyvia      "
// let myChannel="ChaiAurMaut      "

// console.log(myName.trueLength)

let myHeroes=["Thor","SpiderMan"]
 let heroPower={
    Thor:"Hammer",
    SpiderMan:"Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.SpiderMan}`)
    }
 }

 Object.prototype.alyvia=function(){
    console.log(`alyvia is present in all objects`)
 }

 Array.prototype.heyAlyvia=function(){
    console.log(`Alyvia says hello`)
 }
//  heroPower.alyvia()
// myHeroes.alyvia()
// myHeroes.heyAlyvia()
// heroPower.heyAlyvia()

//inheritance

const user={
   name:"ChaiAurMaut",
   email:"chaiaurmaut@google.com"
}

const teacher={
   makevideo:true,
}

const teachersupport={
   isAvailable:false,
}

const TAsupport={
   makeAssignment:'JS Assignment',
   fulltime:true,
   __proto__:teachersupport
}

teacher.__proto__= user

//modern syntax

Object.setPrototypeOf(teachersupport,teacher)

let anotherUser="alyvia      "

String.prototype.trueLength=function(){
   console.log(`${this}`)
   console.log(`${this.name}`)
   console.log(`True length is: ${this.trim().length}`)
}

anotherUser.trueLength()
"biswas".trueLength()
"icedTea".trueLength()