const prompt =require('prompt-sync')({sigint:true});

let tanggal1 = prompt('Masukkan tanggal pertama(BentukNya: DD:MM:YYYY): ');
let data1 = tanggal1.split(':');

let hari1 = parseInt(data1[0]);
let bulan1 = parseInt(data1[1]);
let tahun1 = parseInt(data1[2]);

let tanggal2 = prompt("Masukkan tanggal kedua(BentukNya: DD:MM:YYYY): ");
let data2 = tanggal2.split(':');

let hari2 = parseInt(data2[0]);
let bulan2 = parseInt(data2[1]);
let tahun2 = parseInt(data2[2]);

let totalhari1 = tahun1 * 365 + bulan1 * 30 + hari1;
let totalhari2 = tahun2 * 365 + bulan2 * 30 + hari2;

let selisihHari = Math.abs(totalhari1 - totalhari2);
let tahun = Math.floor(selisihHari / 365);
let sisa = selisihHari % 365;
let bulan = Math.floor(sisa / 30);
sisa = sisa % 30;
let minggu = Math.floor(sisa / 7);
sisa = sisa % 7;
let hari = sisa;

console.log(`Selisih antara tanggal pertama dan kedua adalah ${tahun} tahun, ${bulan} bulan, ${minggu} minggu, dan ${hari} hari.`);