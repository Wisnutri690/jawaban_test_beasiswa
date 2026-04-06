let users = [];

function tambahUser(nama) {
    users.push(nama);
    console.log("Tambah user:", nama);
}

function tampilUser() {
    console.log("\nList user:");
    users.forEach((user, index) => {
        console.log(`${index + 1}. ${user}`);
    });
}

// contoh penggunaan
tambahUser("Andi");
tambahUser("Budi");

tampilUser();