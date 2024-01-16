// Reference :  https://www.geeksforgeeks.org/compare-two-dates-using-javascript/?ref=ml_lbp

let g1 = new Date();
let g2 = new Date('2024-01-18');

// Membandingkan tanggal yang sama
if(g1.getTime() === g2.getTime()) {
    console.log("Tanggalnya Sama");
} else {
    console.log("Tanggalnya Beda");
}

// Membandingkan tanggal apakah lebih besar atau lebih kecil
if(g1.getTime() < g2.getTime()) {
    console.log(`Tanggal ${g1} lebih kecil dari ${g2}`);
} else {
    console.log(`Tanggal ${g1} lebih besar dari ${g2}`);
}

