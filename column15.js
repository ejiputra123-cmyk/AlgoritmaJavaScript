const prompt = require('prompt-sync')({sigint:true});

let tahun = parseInt(prompt("Masukkan sebuah tahun: "));
if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
    console.log(`Tahun ${tahun} adalah tahun kabisat.`);
} else {
    console.log(`Tahun ${tahun} bukanlah tahun kabisat atau yang diinput bukanlah tahun.`);
}