const coding = ["js","ruby","java","cpp","python"]

// const values=coding.forEach( (item)=>{
//     console.log(item)
// } )
// console.log(values)

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>{
//     return num>5})
// console.log(newNums)

const newNums=[]
myNums.forEach( (nums)=>{
    if(nums>5){
        newNums.push(nums)
    }
} )
console.log(newNums)

//filter