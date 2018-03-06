import ProductParser from "./ProductParser";

export default class GigatronProductParser extends ProductParser{
    constructor(link){
        super(link);
    }

    parsePrice(){
        var str = $(this.page).find(this.priceSelector()).text().trim();
        return str.substring(0,str.length - 3);
    }

    parsePhoto(){
        return $(this.page).find(this.photoSelector()).attr("href");
    }

    parseCurrency(){
        var str = $(this.page).find(this.currencySelector()).text();
        return str.slice(-3).trim();
    }

    nameSelector() { return "div.main.clearfix h1"; }
    priceSelector() { return "div.price-item.currency-item h5"; }
    currencySelector() { return "div.price-item.currency-item h5"; }
    photoSelector() { return "div.product-tabs a"; }
}
