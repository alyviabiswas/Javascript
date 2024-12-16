const marvel_heroes = ["Thor","SpiderMan","BlackWidow"]
const dc_heroes = ["SuperMan","Flash","BatMan"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

const all_new_heroes = [...marvel_heroes,...dc_heroes] //more than two arrays can be added while in concat only two arrays can be added
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],6,[7,8,[9,0]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Alyvia"))
console.log(Array.from("Alyvia"))
console.log(Array.from({name:"Alyvia"})) //cannot change directly from an object

let score1= 100
let score2= 200
let score3= 300
console.log(Array.of(score1,score2,score3))