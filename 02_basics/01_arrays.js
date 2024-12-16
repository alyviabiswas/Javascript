// ARRAYS

const myArr = [2,4,7,6,3]
console.log(myArr)
console.log(myArr[0])

const myHeroes = ["SpiderMan","IronMan","Deadpool","BlackWidow"]
console.log(myHeroes)

const myArr2 = new Array(1,2,3,4)
console.log(myArr2)

// METHODS IN ARRAY

myArr.push(9)
myArr.push(1)
myArr.pop()
console.log(myArr)
myArr.unshift(0)
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(7))
console.log(myArr.indexOf(4))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof myArr)
console.log(typeof newArr)

// slice and splice

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myn1)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr)