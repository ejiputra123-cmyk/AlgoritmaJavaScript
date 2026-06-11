const prompt = require('prompt-sync')({sigint:true});

let karakter = prompt("Masukkan karakter 0-9: ");

if (karakter.length === 1 && karakter >= '0' && karakter <= '9'){
    let hasil = parseInt(karakter);
    console.log(hasil);
} else {
    console.log(-99)
}