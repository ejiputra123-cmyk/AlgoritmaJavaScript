const prompt = require('prompt-sync')({sigint:true});

let bulan = parseInt(prompt('Masukkan bulan (1-12): '));
let tahun = parseInt(prompt('Masukkan tahun: '));
let jumlahHari;
if (tahun < 1 || bulan > 12 || bulan < 1) {
    console.log('Tahun tidak valid!');
} else {
    if ([1, 3, 5, 7, 8, 10, 12].includes(bulan)) {
        jumlahHari = 31;
    } else if ([4,6,9,11].includes(bulan)){
        jumlahHari: 30;
    } else if (bulan = 2){
        if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)){
            jumlahHari = 29;
        } else {
            jumlahHari = 28
        }
    } else {
        jumlahHari = 0;
    }

    console.log(`Jumlah hari dari bulan: ${bulan}, dan tahun: ${tahun} adalah ${jumlahHari}`)
}