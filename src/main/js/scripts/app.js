import "../application/index.js";
var path=require("path");


//rest of js code

function changeIcon() {
    let imgSrc = ($("#menu-icon").attr("src") === path.resolve(__dirname, "img/close.png"))
        ? path.resolve(__dirname, "img/grid.png")
        : path.resolve(__dirname, "img/close.png");
    $("#menu-icon").attr("src", imgSrc);
}
$(".menu-list").hide();
$("#menu-icon").click(function (event) {
    changeIcon();
    $(".menu-list").animate({width:'toggle'},350);
    $('#menu').toggleClass('open');
    event.stopPropagation();
});

$("html").click(function (){
    if($('#menu').hasClass("open")){
        changeIcon();
        $('#menu').removeClass('open');
        $(".menu-list").animate({width:'toggle'},350);
    }
});


$("html").on("blur", "input[placeholder='link']", function() {
    var url = $(this).val();
    console.log("Link pasted " + url);
    var parser = new ProductParser(url);
    parser.parse();
    console.log(parser);
});

function appJS() {
    console.log("appJS defined");
}

//---------------------------------
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
    this.page = this.getPage(this.link);
    if(this.page != null) {
        this.name = this.parseName();
        this.price = this.parsePrice();
        this.currency = this.parseCurrency();
        this.proto = this.parsePhoto();
    }
};

ProductParser.prototype.getPage = (url) => {
    $.ajax({
        method: 'GET',
        url : url,
        contentType: 'text/plain',
        success: function (result) {
            this.page = result;
            console.log("Received response " + result);
        },
        error : function (errors) {
            console.log(errors);
        }
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

//--------------------------------------------------

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
