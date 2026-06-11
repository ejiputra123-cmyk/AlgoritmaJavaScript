const prompt = require("prompt-sync")({sigint:true});

let a = parseInt(prompt('Masukkan sisi a: '))
let b = parseInt(prompt('Masukkan sisi b: '))
let c = parseInt(prompt('Masukkan sisi c: '))

if (a + b <= c || a + c <= b || b + c <= a ) {
    console.log("Bukan segitiga")
} else {
    if (a === b && b === c){
        console.log("Segitiga sama sisi")
    } else if (a === b || a === c || b ===c ){
        console.log("Segitiga sama kaki")
    } else {
        console.log("Segitiga sembarang")
    }
}