/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
    if(typeof price !== "number" && typeof tax !== "number"){
        return "Pajak harus dalam angka";
    } else if(typeof tax !== "number"){
        return "Price & Pajak harus dalam angka";
    } else if(typeof price !== "number"){
        return "Price harus dalam angka";
    } else{        
        const pajak = tax/10;
        const total = price + tax;
        return `Total Sales : Rp.${price}\nPajak : ${pajak}\nTotal Harga + Pajak : Rp.${total}`;
    }
}

console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
