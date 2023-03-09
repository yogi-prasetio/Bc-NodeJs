 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

 function getSalesDiscount(price,tax,discount){
    if(typeof price !== "number" && typeof tax !== "number" && typeof discount !== "number"){
        return "Price, Tax & Discount harus dalam angka";
    } else if(typeof tax !== "number"){
        return "Pajak harus dalam angka";
    } else if(typeof price !== "number"){
        return "Price harus dalam angka";
    } else{
        const disc = (discount/100)*price;
        const pat = price-disc;
        const pajak = (tax/100)*pat;
        const total = pat + pajak;
        return `\tTotal Sales \t: Rp.${price}\n`+
        `\tDiscount (${discount}%) \t: Rp.${disc}\n`+
        `\tPrice After Discount : Rp.${pat}\n`+
        `\tPajak (${tax}%) \t: ${pajak}\n`+
        `\t-----------------------------\n`+
        `\tTotal Payment \t: Rp.${total}`;
    }
 }

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */