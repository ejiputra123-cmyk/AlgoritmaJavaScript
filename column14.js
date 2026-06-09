const prompt = require('prompt-sync')({sigint:true});

let jamLembur = 0, jamNormal, gaji;
const upahNormal = 2000;
const upahLembur = 3000;
const batasJamNormal = 48;

let jamKerja = parseInt(prompt("Masukkan jumlah jam kerja: "));

if (jamKerja <= batasJamNormal) {
    gaji = jamKerja * upahNormal;
} else if (jamKerja > batasJamNormal) {
    jamLembur = jamKerja - batasJamNormal;
    gaji = (batasJamNormal * upahNormal) + (jamLembur * upahLembur);
} else {
    console.log("Input jam kerja tidak valid atau anda tidak bekerja.");
};

console.log(`Gaji yang diterima adalah Rp ${gaji}`);