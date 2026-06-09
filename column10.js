const prompt = require('prompt-sync')({sigint:true});

let tinggiBadan = parseInt(prompt("Masukkan tinggi badan dalam cm: "));
let hasilPertama = (tinggiBadan - 100);
let beratBadanIdeal = hasilPertama - (0.1 * hasilPertama).toFixed(2);

console.log(`Berat badan ideal untuk tinggi ${tinggiBadan} cm adalah ${beratBadanIdeal} kg.`);