const prompt = require('prompt-sync')({sigint:true});

let jumlah = 0;
let angka = "";

for(let i = 1; i <= 5; i++){
    angka += i + " ";
    jumlah += i;
}
console.log("Angka:", angka);
console.log("Jumlah:", jumlah);