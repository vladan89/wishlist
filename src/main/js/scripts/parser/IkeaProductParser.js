function IkeaProductParser(url) {
    ProductParser.call(this, url);
}

IkeaProductParser.prototype.nameSelector = function () {
    return "#name";
};
IkeaProductParser.prototype.priceSelector = function () {
    return "#price1";
};
IkeaProductParser.prototype.currencySelector = function () {
    return "#price1 .superscriptStyle"
};
IkeaProductParser.prototype.photoSelector = function () {
    return "#productImg";
};

function IkeaProductParserJS() {
    console.log("IkeaProductParserJS defined");
}
