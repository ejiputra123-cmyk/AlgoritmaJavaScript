const prompt = require('prompt-sync')({sigint:true});

let uang = parseInt(prompt("Masukkan jumlah uang: "));
let pecahan1000 = Math.floor(uang / 1000);
let sisa = uang % 1000;

let pecahan500 = Math.floor(sisa / 500);
sisa = sisa % 500;

let pecahan50 = Math.floor(sisa / 50);
sisa = sisa % 50;

let pecahan25 = Math.floor(sisa / 25);
sisa = sisa % 25;

let pecahan10 = Math.floor(sisa / 10);
sisa = sisa % 10;   

let pecahan5 = Math.floor(sisa / 5);
sisa = sisa % 5;

let pecahan1 = Math.floor(sisa / 1);
sisa = sisa % 1;

console.log(`Jumlah uang ${uang} dapat dibagi menjadi:`);
console.log(`${pecahan1000} lembar pecahan 1000`);
console.log(`${pecahan500} lembar pecahan 500`);
console.log(`${pecahan50} lembar pecahan 50`);
console.log(`${pecahan25} lembar pecahan 25`);
console.log(`${pecahan10} lembar pecahan 10`);
console.log(`${pecahan5} lembar pecahan 5`);
console.log(`${pecahan1} lembar pecahan 1`)
console.log(`Sisa uang yang tidak dapat dibagi: ${sisa}`);