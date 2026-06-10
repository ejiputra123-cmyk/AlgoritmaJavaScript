const prompt = require('prompt-sync')({sigint: true});

function konversiDetikKeWaktuLain(detik) {
    const hari = Math.floor(detik / 86400);
    const sisaDetikSetelahHari = detik % 86400;
    const jam = Math.floor(sisaDetikSetelahHari / 3600);
    const sisaDetikSetelahJam = sisaDetikSetelahHari % 3600;
    const menit = Math.floor(sisaDetikSetelahJam / 60);
    const sisaDetikSetelahMenit = sisaDetikSetelahJam % 60;
    return { hari, jam, menit, sisaDetikSetelahMenit };
}

const detik = parseInt(prompt("Masukkan jumlah detik: "));
const waktu = konversiDetikKeWaktuLain(detik);
console.log(`Hasil konversi: ${waktu.hari} hari, ${waktu.jam} jam, ${waktu.menit} menit, ${waktu.sisaDetikSetelahMenit} detik`);