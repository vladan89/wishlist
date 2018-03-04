import "./IkeaProductParser.js";

function ProductParser(url) {

    this.name;
    this.link = url;
    this.price;
    this.currency;
    this.photo;
    this.note;

    this.page;

}

ProductParser.prototype.parse = function () {
    //TODO find supported parser
    this.page = this.getPage();
    this.name = this.parseName();
    this.price = this.parsePrice();
    this.currency = this.parseCurrency();
    this.proto = this.parsePhoto();
};

ProductParser.prototype.getPage = () => {
    $.get(url)
        .done((result) => {
            this.page = result;
        })
        .error((errors) => {
            console.log(errors);
        });
};

ProductParser.prototype.parseName = () => {
    return this.page.find(nameSelector()).text();
};
ProductParser.prototype.parsePrice = () => {
    return this.page.find(priceSelector()).text();
};
ProductParser.prototype.parseCurrency = () => {
    return this.page.find(currencySelector()).text();
};
ProductParser.prototype.parsePhoto = () => {
    return this.page.find(photoSelector()).attr("src");
};

ProductParser.prototype.nameSelector = function () {
};
ProductParser.prototype.priceSelector = function () {
};
ProductParser.prototype.currencySelector = function () {
};
ProductParser.prototype.photoSelector = function () {
};

function productParserJS() {
    console.log("productParserJS defined");
}
