// no 1
let pesanan = prompt ("masukan nominal gram");
let harga = pesanan / 100 * 500
let perkg = ( pesanan / 1000 );
let diskon = ( harga * 0.05);
let hargaset = (harga - diskon)
console.log (`harga pesanan sebelum diskon ${harga}Rp, ${perkg} kg, harga setelah diskon ${hargaset}`)

// no 2
let bilangan = prompt ("input bilangan")
let satuan = bilangan % 10
let puluhan = Math.floor((bilangan % 100) / 10)
let ratusan = Math.floor((bilangan / 100) % 10)
let ribuan = Math.floor((bilangan/1000) % 100 )
console.log (`${ribuan} ribuan, ${ratusan} ratusan, ${puluhan} puluhan, ${satuan} satuan`)

// no 3
let temperatur = prompt ("masukan angka temperatur fahrenheit");
let celcius = (temperatur - 32 ) * 5/9    
    if (celcius > 300 ){
        keterangan = "Panas";
    }
    else if (celcius < 250){
        keterangan = "Dingin";
    }
    else {
        keterangan = "normal"
    }
    let hasil = `<br> cuaca saat ini sedang ${keterangan}`;
    document.write (hasil)