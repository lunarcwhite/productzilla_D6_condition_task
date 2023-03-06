function cekBilangan(bilangan) {
    if (bilangan % 2 == 0) {
        console.log(`${bilangan} adalah bilangan genap`)
    } else if (bilangan % 2 == 1) {
        console.log(`${bilangan} adalah bilangan ganjil`)
    } else {
        console.log('Bilangan tidak diketahui')
    }
}

cekBilangan(9)

let tes = 10 > 15
if (tes) {
    console.log('benar');
}