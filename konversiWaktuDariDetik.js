const prompt = require('prompt-sync')({sigint: true});

function konversiDetikKeWaktuLain(detik) {
    const hari = Math.floor(detik / 86400);
    const sisaDetikSetelahHari = detik % 86400;
    const jam = Math.floor(detik / 3600);
    const sisaDetikSetelahJam = detik % 3600;
    const menit = Math.floor(sisaDetikSetelahJam / 60);
    const sisaDetikSetelahMenit = sisaDetikSetelahJam % 60;
    return { jam, menit, sisaDetikSetelahMenit };
}

const detik = parseInt(prompt("Masukkan jumlah detik: "));
const waktu = konversiDetikKeWaktuLain(detik);
console.log(`Hasil konversi: ${waktu.jam} jam, ${waktu.menit} menit, ${waktu.sisaDetikSetelahMenit} detik`);