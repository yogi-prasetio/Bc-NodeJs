export default class Product{
    static totalProduct = 0;

    constructor(prodId,prodName, category, price=0,totalBuy=1){
        this.prodId = prodId;
        this.prodName = prodName;
        this.category = category;
        this.price = price;
        this.totalBuy = totalBuy;
        Product.totalProduct++;
    }

    setPrice(price){
        this.price = price;
    }

    setTotalBuy(total){        
        this.totalBuy = total;
    }

    toString(){
        return parseInt(this.price) * parseInt(this.total);
    }

}