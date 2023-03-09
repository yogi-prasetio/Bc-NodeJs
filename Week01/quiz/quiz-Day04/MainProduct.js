import Product from "./Product.js";

const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);
const prod2 = new Product(2, "UltraBook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "IPHONE", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);

let listCart = [prod1.toString(), prod2.toString(), prod3.toString(), prod4.toString(), prod5.toString()];

const totalTagihan = listCart.reduce((sum, el) => sum + el, 0)
console.log(`Total Tagihan =${totalTagihan}`);//Total Tagihan =64700000

const totalTagihanDiscount = (discount) => {
    const totalAfterDiscount = totalTagihan - ((discount / 100) * totalTagihan);
    return totalAfterDiscount;
}

console.log(`Total Tagihan discount=${totalTagihanDiscount(10)}`);//Total Tagihan discount=58580000