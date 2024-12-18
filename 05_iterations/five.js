const coding = ["js","ruby","java","cpp","python"]

// coding.forEach( function (val){
//     console.log(val)
// } )

// coding.forEach( (val)=>{
//     console.log(val)
// } )

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
} )

const myCoding=[
    {
        languagename:"JAVA",
        filename:"java"
    },
    {
        languagename:"Python",
        filename:"py"
    },
    {
        languagename:"Ruby",
        filename:"rb"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languagename)
} )