const FazzFood = (price, voucher, distance, tax) => {
    const availableVoucher =  {
        FAZZFOOD50: {
            min: 50000,
            discPercentage: 50 / 100,
            maxDiscount: 50000
        }, 
        DITRAKTIR60: {
            min: 25000,
            discPercentage: 60 / 100,
            maxDiscount: 30000
        }
    }
    if(!availableVoucher[voucher]) {
        console.log("")
        return
    }

    voucher = availableVoucher[voucher]

    if(price < voucher.minPrize) {
        console.log("")
        return
    }

    let disc = price*voucher.discPercentage

    if(disc > voucher.maxDiscount) {
        disc = voucher.maxDiscount
    }

    let deliveryFee = 5000 

    if(distance > 2) {
        deliveryFee = deliveryFee + (distance - 2) * 3000 
    }

    if(tax === true) {
        tax = price* 5/100
    } else {
        tax = 0
    }

    const subtotal = price - disc + deliveryFee + tax

    console.log("Harga: " + price)
    console.log("Potongan: " + disc)
    console.log("Ongkir: " + deliveryFee)
    console.log("Pajak: " + tax)
    console.log("Subtotal: " + subtotal)
} 

FazzFood(70000, "DITRAKTIR60", 4, true)