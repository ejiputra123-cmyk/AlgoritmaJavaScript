const prompt = require('prompt-sync')({sigint:true});

let temp ,x ,y, z;
x = parseInt(prompt("Masukkan nilai x: "));
y = parseInt(prompt("Masukkan nilai y: "));
z = parseInt(prompt("Masukkan nilai z: "));
console.log(`Nilai-nilai sebelum pertukaran: (${x} ${y} ${z})`);
temp = x;
x = y;
y = z;
z = temp;

console.log(`Nilai-nilai setelah pertukaran: (${x} ${y} ${z})`);