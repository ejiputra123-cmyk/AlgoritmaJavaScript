const prompt = require('prompt-sync')({sigint:true});

let a = parseInt(prompt("Masukkan nilai a: "));
let b = parseInt(prompt("Masukkan nilai b: "));
let c = parseInt(prompt("Masukkan nilai c: "));

arr = [a,b,c];

arr.sort((x, y) => x - y);
console.log(`Urutan terkecil ke terbesar ${arr[0]}, ${arr[1]}, ${arr[2]}`)