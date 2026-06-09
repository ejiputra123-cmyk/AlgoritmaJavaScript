const prompt = require('prompt-sync')({sigint:true});

let x = parseInt(prompt("Masukkan nilai x: "));
let y = parseInt(prompt("Masukkan nilai y: "));

if (x > 0 && y > 0) {
    console.log("Titik P berada di kuadran 1");
} else if (x < 0 && y > 0) {
    console.log("Titik P berada di kuadran 2");
} else if (x < 0 && y < 0) {
    console.log("Titik P berada di kuadran 3");
} else if (x > 0 && y < 0) {
    console.log("Titik P berada di kuadran 4");
} else if (x === 0 && y === 0) {
    console.log("Titik P tidak berada di kuadran manapun, karena berada di titik asal (0,0)");
}