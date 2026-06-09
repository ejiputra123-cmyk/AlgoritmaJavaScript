const prompt = require('prompt-sync')({sigint:true});

let angka = parseInt(prompt("Masukkan sebuah angka diantara 1 sampai 4: "));
switch (angka) {
    case 1:
        console.log("Satu");
        break;
    case 2:
        console.log("Dua");
        break;
    case 3:
        console.log("Tiga");
        break;
    case 4:
        console.log("Empat");
        break;
    default:
        console.log("Input tidak valid. Harap masukkan angka antara 1 dan 4.");
}