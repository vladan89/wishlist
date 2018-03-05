import ProductParser from "./ProductParser";

export default class IkeaProductParser extends ProductParser{
    constructor(link){
        super(link);
    }

    parsePrice(){
        var str = $(this.page).find(this.priceSelector()).text().trim();
        return str.slice(-3).trim() === "RSD" ? str.substring(0,str.length - 3) : "0";
    }

    nameSelector() { return "#type"; }
    priceSelector() { return "#price1"; }
    currencySelector() { return "#price1 .superscriptStyle"; }
    photoSelector() { return "#productImg"; }
}
