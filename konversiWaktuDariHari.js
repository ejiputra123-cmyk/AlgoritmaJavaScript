const prompt = require('prompt-sync')({sigint: true});

let durasiHariProyek = parseInt(prompt("Masukkan durasi proyek dalam hari: "));
let tahun = Math.floor(durasiHariProyek / 365 );
let sisa = durasiHariProyek % 365;
let bulan = Math.floor(sisa / 30);
sisa = sisa % 30;
let minggu = Math.floor(sisa / 7);
sisa = sisa % 7;
let hari = sisa;

console.log(`Durasi proyek adalah ${tahun} tahun, ${bulan} bulan, ${minggu} minggu, dan ${hari} hari.`);