const prompt = require('prompt-sync')({sigint: true});

let nilaiUjian = parseInt(prompt("Masukkan nilai ujian: "));
if (nilaiUjian >= 80) {
    console.log("Nilai ujian Anda adalah A.");
} else if (nilaiUjian >= 70 && nilaiUjian < 80) {
    console.log("Nilai ujian Anda adalah B.");
} else if (nilaiUjian >= 55 && nilaiUjian < 70) {
    console.log("Nilai ujian Anda adalah C.");
} else if (nilaiUjian >= 40 && nilaiUjian < 55) {
    console.log("Nilai ujian Anda adalah D.");
} else if (nilaiUjian >= 0 && nilaiUjian < 40) {
    console.log("Nilai ujian Anda adalah E.");
} else {
    console.log("Input tidak valid atau yang diinput bukanlah sebuah angka.");
}