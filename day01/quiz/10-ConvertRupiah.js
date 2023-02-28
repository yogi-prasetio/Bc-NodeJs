/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){    
    switch (type) {
        case "yen":            
            const yentorp = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(money*111.88);
            return `${money} ${type} = ${yentorp}`;
            break;
        case "usd":            
            const usdtorp = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(money*15271.96);
            return `${money} ${type} = ${usdtorp}`;
            break;
        case "euro":            
            const eutorp = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(money*16125.19);
            return `${money} ${type} = ${eutorp}`;
            break;
        default:
            return "no match type currency"
            break;
    }
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency