const myObject = {
    js:"javascript",
    cpp:"C++",
    r:"Ruby",
    swift:"Swift by Apple",
}

for (const key in myObject

) {
    // console.log(key)
    console.log(myObject[key])
    console.log(`${key} is the shortcut for ${myObject[key]}`)
}


const programming = ["js","java","rb","py","cpp"]
for (const key in programming) {
    // console.log(key)
    console.log(programming[key])
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
console.log(map)

// for (const key in map) {
//     console.log(programming[key])
// }

