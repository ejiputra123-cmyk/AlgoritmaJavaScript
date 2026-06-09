const prompt = require('prompt-sync')({sigint:true});

let hurufVokal = ['a', 'i', 'u', 'e', 'o'];
let huruf = prompt("Masukkan sebuah huruf: ").toLowerCase();
if (hurufVokal.includes(huruf)) {
    console.log(`Huruf ${huruf} adalah huruf vokal.`);
} else {
    console.log(`Huruf ${huruf} adalah huruf konsonan.`);
}   
