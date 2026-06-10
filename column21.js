const prompt = require('prompt-sync')({sigint:true});

let inputWaktu = prompt("Masukkan waktu lama (format jam:menit:detik): ");
let bagianWaktu = inputWaktu.split(':');
 
let jam = parseInt(bagianWaktu[0]);
let menit = parseInt(bagianWaktu[1]);
let detik = parseInt(bagianWaktu[2]);

if (bagianWaktu.length !== 3 || isNaN(jam) || isNaN(menit) || isNaN(detik) || jam < 0 || menit < 0 || menit >= 60 || detik < 0 || detik >= 60 ){
    console.log("Format waktu tidak valid. Pastikan formatnya hh:mm:ss dan nilai jam, menit, detik sesuai.");
} else {
    let jamLama = `${String(jam).padStart(2, '0')} ${String(menit).padStart(2, '0')} ${String(detik).padStart(2, '0')}`;

    detik = detik + 1;
    if (detik === 60) {
        detik = 0;
        menit = menit + 1;

        if (menit === 60) {
            menit = 0;
            jam = jam + 1;

            if (jam === 24) {
                jam = 0;
            }
        }
    }
}

let jamBaru = `${String(jam).padStart(2, '0')}:${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`;
console.log(`Waktu baru setelah ditambah 1 detik: ${jamBaru}`);