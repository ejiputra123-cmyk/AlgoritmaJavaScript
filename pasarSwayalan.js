const prompt = require('prompt-sync')({sigint:true});

let totalBelanja = prompt("Masukkan harga tota belanja: ");

if (totalBelanja >= 100000) {
    let hargaBayar = totalBelanja * 0.2;
    console.log(`Harga bayar anda melebihi Rp100.000 maka anda mendapatkan diskon sebesar 10% \nTotal harga yang anda harus bayar adalah: Rp${hargaBayar}`)
} else {
    console.log(`Harga bayar anda adalah: Rp${totalBelanja} `)
}