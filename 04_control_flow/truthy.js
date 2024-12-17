// const userEmail="a@alyvia.ai"
// const userEmail=""
const userEmail=[]
if(userEmail){
    console.log("Got the user email!")
}else{
    console.log("Didn't get the user email")
}

// FALSY VALUES
// false, 0 , -0 , BigInt(0n) , "" , null , undefined , NaN

// TRUTHY VALUES
//"0" , 'false' , "  " , [] , {} , function(){}

if(userEmail.length === 0){
    console.log("Array is empty")
}


const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}


//Nullish Coalescing Operator(??): null,undefined
//assigns the other value in case null/undefined is present before
//if there are more than two options, the first non-null/non-undefined value is assigned

let val1;
// val1=5??10
val1=undefined??10
console.log(val1)

// Ternary Operator

const teaPrice = 190
teaPrice>=100?console.log("More than 100"):console.log("Less than 100")