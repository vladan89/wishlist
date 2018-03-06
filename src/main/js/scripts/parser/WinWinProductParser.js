import ProductParser from "./ProductParser";

export default class WinWinProductParser extends ProductParser{
    constructor(link){
        super(link);
    }

    parsePrice(){
        var str = $(this.page).find(this.priceSelector()).first().text().trim();
        return str.substring(0,str.length - 4);
    }

    parsePhoto(){
        return $(this.page).find(this.photoSelector()).attr("src");
    }

    parseCurrency(){
        var str = $(this.page).find(this.currencySelector()).text();
        return str.slice(-4).trim();
    }

    nameSelector() { return "div.product-name h1"; }
    priceSelector() { return "span.price"; }
    currencySelector() { return "span.price"; }
    photoSelector() { return "img.fotorama__img"; }
}
