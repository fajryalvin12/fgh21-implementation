const nama = "malam"; 

let hasil = "";
for(let i = nama.length; i > 0; i--)
    hasil += nama[i-1] ;
if(nama.length > 0) {
    if(hasil === nama) {
        console.log("Palindrom")
    } else {
        console.log("Maaf, kata ini bukan palindrom")
    }
} 