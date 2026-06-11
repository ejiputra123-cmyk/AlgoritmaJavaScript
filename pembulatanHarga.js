const prompt =require('prompt-sync')({sigint:true});

let totalBayar = prompt('Masukkan total bayar belanja: ');
if (totalBayar % 100 === 0 && totalBayar % 50 === 0 && totalBayar % 25 === 0){
    Math.round(totalBayar/25);
    console.log(totalBayar)
}