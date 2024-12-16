let a=300
if(true){
    let a=10
    const b=20
    // var c=30
    console.log("Inner:",a)
}
console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="alyvia"

    function two(){
        const website="YouTube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
one()
//(child function can access parent function but parent function cannot access child function)

if(true){
    const username="alyvia"
    if(username==="alyvia"){
        const website = " YouTube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)




//console.log(addone(7)) is possible
function addone(num){
    return num+1
}
console.log(addone(7))

//console.log(addTwo(7)) is not possible
const addTwo = function(num){
    return num+2
}
console.log(addTwo(7))