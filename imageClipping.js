const prompt = require('prompt-sync')({sigint:true});

let nilaiPixel = parseInt(prompt("Masukkan nilai RGB(0-255): "))

if (isNaN(nilaiPixel)){
    console.log("Anda memasukkan nilai Invalid! ");
} else if (nilaiPixel < 0) {
    let nilaiBaru = 0;
    nilaiPixel = nilaiBaru
} else if (nilaiPixel > 255) {
    let nilaiBaru = 255;
    nilaiPixel = nilaiBaru
}
console.log(`Nilai pixel yang anda input adalah: ${nilaiPixel}`)