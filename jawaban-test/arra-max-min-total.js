let angka = [10, 5, 8, 20, 3];

let max = angka[0];
let min = angka[0];
let total = 0;

for (let i = 0; i < angka.length; i++) {
    if (angka[i] > max) max = angka[i];
    if (angka[i] < min) min = angka[i];
    total += angka[i];
}

console.log("Terbesar:", max);
console.log("Terkecil:", min);
console.log("Total:", total);