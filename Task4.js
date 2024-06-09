function divideAndSort (angka) {
    // ubah terlebih dahulu tipe data pada variabel input menjadi string
    let angkaString = angka.toString();
    
    // pisahkan string yang ada menjadi beberapa bagian dicakup dari array 
    // sesuai dengan indikasi pemisah pada parameter, yaitu "0"
    let angkaTanpaNol = angkaString.split("0"); 

    // lakukan perulangan, dilanjutkan dengan menjalankan fungsi split untuk memisahkan kembali string yang ada menjadi substring, kemudian mengurutkan substring yang sudah terpisah menggunakan fungsi sort, dan menggabungkan kembali substring menggunakan join
    for (let i = 0; i < angkaTanpaNol.length; i++){
        angkaTanpaNol[i] = angkaTanpaNol[i].split("").sort().join("")
    }

    // gabungkan kembali 3 string yang terpisah dari array tadi menjadi satu string saja
    let hasilAwal = angkaTanpaNol.join("");

    // lakukan transisi tipe data dari string menjadi integer atau number
    let ubahInteger = parseInt(hasilAwal); 

    return ubahInteger
}

let input = 5956560159466056
let output = divideAndSort(input)
console.log(output)