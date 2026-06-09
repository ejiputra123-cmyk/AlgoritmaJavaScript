const prompt = require('prompt-sync')({sigint:true});

let angka = parseInt(prompt("Masukkan sebuah nilai: "));

if (angka > 0) {
    console.log(`Angka ${angka} adalah bilangan positif.`);
} else if (angka < 0) {
    console.log (`Angka ${angka} adalah bilangan negatif.`);
} else if (angka === 0) {
    console.log(`Angka ${angka} adalah nol.`);
} else {
    console.log("Input tidak valid atau yang diinput bukanlah sebuah angka.");
}