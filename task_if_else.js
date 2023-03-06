//tugas
let cuaca = 'cerah'
let sepatuHitam = true
let sepatuPutih = true

if(cuaca == 'cerah'){
    console.log('Pergi ke toko');
    if(sepatuHitam){
        console.log('Beli sepatu hitam');
    }else if(sepatuPutih){
        console.log('Stok hanya ada warna putih');
        console.log('Beli sepatu putih sekalian dengan kaus kaki warna putih');
    }else{
        console.log('Stok sepatu warna hitam dan putih kosong.');
        console.log('Cari toko lain');
    }
}else{
    console.log('Beli Online');
    if(sepatuHitam){
        console.log('Beli sepatu hitam');
    }else if(sepatuPutih){
        console.log('Stok hanya ada warna putih');
        console.log('Beli sepatu putih sekalian dengan kaus kaki warna putih');
    }else{
        console.log('Cari toko lain');
    }
}