// REDUCE
const myNums=[1,2,3]

const myTotal = myNums.reduce(function (acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval
},1)

// const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal)

const shoppingCart=[
    {
        itemname:"JS Course",
        price: 2999,
    },
    {
        itemname:"Web Dev Course",
        price: 9999,
    },
    {
        itemname:"Python Course",
        price: 999,
    },
    {
        itemname:"Data Science Course",
        price: 12999,
    },
    {
        itemname:"Mobile Dev Course",
        price: 7999,
    },
    {
        itemname:"Gen AI Course",
        price: 5999,
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)