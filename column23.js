const prompt = require('prompt-sync')({sigint:true});

let angka = parseFloat(prompt("Masukkan angka: "));

if (angka % 4 === 0){
    console.log("Angka tersebut adalah kelipatan 4")
} else {
    console.log("Angka tersebut bukan kelipatan 4")
}