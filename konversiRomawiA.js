const prompt = require('prompt-sync')({sigint:true});

let angka = parseInt(prompt("Masukkan angka dari 1 sampai 10: "));

let angkaRomawi = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

if (angka > 10 || angka < 1 || isNaN(angka)) {
    console.log('Inputan anda salah!')
} else {
    let hasilRomawi = angkaRomawi[angka - 1];
    console.log(`${angka} dalam angka romawi adalah: ${hasilRomawi}`)
}
