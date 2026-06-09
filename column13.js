const prompt = require('prompt-sync')({sigint:true});

let nomor = parseInt(prompt("Masukkan sebuah angka: "));
if (nomor % 2 === 0) {
    console.log(`Angka ${nomor} adalah bilangan genap.`);
} else {
    console.log(`Angka ${nomor} adalah bilangan ganjil.`);
}