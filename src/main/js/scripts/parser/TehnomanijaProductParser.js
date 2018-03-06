import ProductParser from "./ProductParser";

export default class TehnomanijaProductParser extends ProductParser{

    constructor(link){
        super(link);
    }

    parsePrice(){
        var str = $(this.page).find(this.priceSelector()).html().trim();
        return str.slice(-3).trim() === "RSD" ? str.substring(0,str.length - 3) : "0";
    }
    parseCurrency(){
        var str = $(this.page).find(this.currencySelector()).html().trim();
        return str.slice(-3).trim();
    }
    parseName() {
        this.id = $(this.page).find(this.nameSelector()).attr("id").trim().split("-")[3];
        return $(this.page).find(this.nameSelector()).text().trim()
    }
    parsePhoto(){
        return $(this.page).find(this.photoSelector()).attr("src").trim();
    }

    nameSelector(){ return "h1.product-details-title"; }
    priceSelector() { return "div.price"; }
    currencySelector() { return "div.price"; }
    photoSelector() { return "#prod_pic_"+this.id;; }

}