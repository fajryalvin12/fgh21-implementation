const reverseWords = (kalimat) => {
    let arr = []
    let ba, bb = 0
    for (let i = 0; i < kalimat.length; i++) {
        if(kalimat[i] === " " || i === kalimat.length) {
            if (i === kalimat.length - 1) {
                ba = i + 1 
            } else {
                ba = i
            }
            let kata = ""
            for(let j = bb; j < ba; j++) {
                kata = kata + kalimat[j]
            }
            arr = [...arr, kata]
            bb = ba + 1
            }
        }
        let hasil = ""
        for(let i = 0; i < arr.length; i++) {
            if (i > 0) {
                hasil = hasil + " " + arr[i]
            } else {
                hasil = hasil + arr[i]
            }
        }
        console.log(hasil)
    }

reverseWords("Saya Belajar Javascript")