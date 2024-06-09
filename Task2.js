const kalimat = "Saya Belajar Javascript"

let hasilKalimat = "";
let batasBawah = 0

for(let i = 0; i <= kalimat.length; i++);
    if(kalimat[i] == " " && i == kalimat.length) {
        let batasAtas = i; 
        for (let batasBawah = 0; batasAtas > batasBawah; batasBawah++) {
            hasilKalimat = hasilKalimat + kalimat[batasBawah] 
        } 
    } else {
        console.log(hasilKalimat)
    }
