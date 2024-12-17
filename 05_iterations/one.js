//for

for (let index = 0; index <=10; index++) {
    const element = index;
    if(element==7){
        console.log("The element is 7.")
    }
    console.log(`The value of element is ${index}.`)
}

for (let i = 0; i <= 10; i++) {
    console.log(`The Outer Loop Value:${i}`)
    for (let j = 0; j <= 10; j++) {
        console.log(`The outer loop value is ${i} and the inner loop value is ${j}`)
        console.log(i+'*'+j+'='+i*j)
    }
    
}


let myArray=["SpiderMan","IronMan","Thor","Wolverine"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}


// break and continue

for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log("5 is detected!")
        // break;
        continue;
    }
    console.log(`The value is ${index}`)
    
}