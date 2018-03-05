export default class ProductParser{
    constructor(link){
        this.name;
        this.price;
        this.currency;
        this.photo;
        this.note;
        this.page;
        this.link = link;
    }

    parse(){
        this.getPageContent(this.link);
    }

    getPageContent(url){
        let self = this;
        $.ajax({
            method: 'GET',
            url : '/connection/get?url=' + url,
            contentType: 'text/plain',
            success: (result) => {
                self.page = result;
                self.fillData();
            },
            error : function (errors) {
                console.log(errors);
            }
        });
    }

    fillData(){
        this.name =  this.parseName();
        this.price = this.parsePrice();
        this.currency = this.parseCurrency();
        this.photo = this.parsePhoto();
        this.page = "";
        this.complete = true;
    }

    printData(){
        console.log("Name:", this.name );
        console.log("Price:", this.price );
        console.log("Currency:", this.currency);
        console.log("Photo:", this.photo );
        console.log("Link:", this.link );
    }

    getName(){ return this.name; }

    getPrice(){ return this.price; }

    getCurrency(){ return this.currency; }

    getPhoto(){ return this.photo; }

    getLink(){ return this.link; }

    parseName(){ return $(this.page).find(this.nameSelector()).text(); }

    parsePrice(){ return $(this.page).find(this.priceSelector()).text(); }

    parseCurrency(){ return $(this.page).find(this.currencySelector()).text(); }

    parsePhoto(){ return this.link.getUrlOrigin() + $(this.page).find(this.photoSelector()).attr("src"); }

    nameSelector(){ return ""; }

    priceSelector(){ return ""; }

    currencySelector(){ return ""; }

    photoSelector(){ return ""; }

}
