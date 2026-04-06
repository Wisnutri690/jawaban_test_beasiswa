let buah = ["apel", "jeruk", "mangga"];

// tambah
buah.push("pisang");

// hapus "jeruk"
buah = buah.filter(item => item !== "jeruk");

console.log(buah);