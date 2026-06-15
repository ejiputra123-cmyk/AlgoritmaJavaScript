const prompt =require('prompt-sync')({sigint:true});

let totalHarga = parseInt(prompt('Masukkan total bayar belanja: '));
let pecahanUang = [100000 ,20000, 10000, 5000, 2000, 1000, 500, 100, 50, 25];
let hasil = [];
let totalBulat = Math.floor(totalHarga / 25) * 25;
let selisih = totalHarga - totalBulat;
let sisa = totalBulat;

for (let i = 0; i < pecahanUang.length; i++ ){
    let jumlah = Math.floor(sisa / pecahanUang[i]);

    if (jumlah > 0){
        sisa = sisa - (jumlah * pecahanUang[i]);
        hasil.push({
            pecahan: pecahanUang[i],
            jumlah: jumlah,
        })
    }
}

console.log(`Total harga: ${totalHarga}, Total setelah dibulat: ${totalBulat},`);
console.log(hasil)