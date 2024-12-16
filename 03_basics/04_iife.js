// Immediately Inviked Function Expressions(IIFE)
// used to remove the pollution caused due to global scopes

(function chai(){ //named IIFE
    console.log(`DB connected!`)
})(); //';' is used to separate two IIFEs

// ( function aurcode(){
//     console.log(`DB CONNECTED!!`)
// } )()

((name)=>{ //unnamed IIFE
    console.log(`DB CONNECTED to ${name}!!`)
} )('alyvia')

