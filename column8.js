const prompt = require('prompt-sync')({sigint:true});

let jarak = parseInt(prompt("Masukkan jumlah jarak tempuh dalam cm: "));
let km = Math.floor(jarak / 100000);
let sisa = jarak % 100000;

let m = Math.floor(sisa / 100);
sisa = sisa % 100;


console.log(`Jumlah jarak ${jarak} cm dapat dibagi menjadi:`);
console.log(`${km} km`);
console.log(`${m} m`);
console.log(`${sisa} cm`);