const prompt = require('prompt-sync')({sigint: true});

let namaKaryawan = prompt("Masukkan nama karyawan: ");
let jamKerja = parseInt(prompt("Masukkan jumlah jam kerja: "));
let golongan = prompt("Masukkan golongan (A/B/C/D): ").toUpperCase();
let gaji;
const upahLembur = 3000;
const jamLembur = 0;
const upahGolonganA = 4000;
const upahGolonganB = 5000;
const upahGolonganC = 6000;
const upahGolonganD = 7500;

if (jamKerja > 48) {
    jamLembur = jamKerja - 48;
    switch (golongan) {
        case 'A':
            gaji = (48 * upahGolonganA) + (jamLembur * upahLembur);
            break;
        case 'B':
            gaji = (48 * upahGolonganB) + (jamLembur * upahLembur);
            break;
        case 'C':
            gaji = (48 * upahGolonganC) + (jamLembur * upahLembur);
            break;
        case 'D':
            gaji = (48 * upahGolonganD) + (jamLembur * upahLembur);
            break;
        default:
            console.log("Golongan tidak valid. Harap masukkan A, B, C, atau D.");
            break;
    }
} else if (jamKerja <= 48) {
    switch (golongan) {
        case 'A':
            gaji = jamKerja * upahGolonganA;
            break;
        case 'B':
            gaji = jamKerja * upahGolonganB;
            break;
        case 'C':
            gaji = jamKerja * upahGolonganC;
            break;
        case 'D':
            gaji = jamKerja * upahGolonganD;
            break;
        default:
            console.log("Golongan tidak valid. Harap masukkan A, B, C, atau D.");
            break;
    }
}

console.log(`Nama Karyawan\t\t: ${namaKaryawan}`);
console.log(`Jumlah Jam Kerja\t: ${jamKerja} jam`);
console.log(`Golongan\t\t: ${golongan}`);
console.log(`Gaji yang diterima adalah Rp ${gaji}`);