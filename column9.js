const prompt = require('prompt-sync')({sigint:true});

let meter = parseInt(prompt("Masukkan jumlah meter: "));
let yard = Math.floor(meter / 0.9144);
let sisa = meter % 0.9144;

let kaki = Math.floor(sisa / 30.48);
sisa = sisa % 30.48;

let inci = Math.floor(sisa / 25.4);
sisa = sisa % 25.4;


console.log(`Jumlah jarak ${meter} m dapat dibagi menjadi:`);
console.log(`${yard.toExponential(2)} yard`);
console.log(`${kaki.toFixed(2)} kaki`);
console.log(`${inci.toFixed(2)} inci`);