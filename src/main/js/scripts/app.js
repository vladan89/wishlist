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
    this.getPage(this.link);
};

ProductParser.prototype.fillData = function () {
    this.name = this.parseName();
    this.price = this.parsePrice();
    this.currency = this.parseCurrency();
    this.photo = this.parsePhoto();
};

ProductParser.prototype.printData = function () {
    var name = this.name;
    var price = this.price;
    var currency = this.currency;
    var photo = this.photo;

    console.log("Name:", name );
    console.log("Price:", price );
    console.log("Currency:", currency);
    console.log("Photo:", photo );
};

ProductParser.prototype.getPage = function (url) {
    let self = this;
    $.ajax({
        method: 'GET',
        url : '/connection/get?url=' + url,
        contentType: 'text/plain',
        success: (result) => {
            self.page = result;
            self.fillData();
            console.log("Received response!");
            self.printData();
            }
        ,
        error : function (errors) {
            console.log(errors);
        }
    });
};

ProductParser.prototype.parseName = function () {
    return $(this.page).find(this.nameSelector()).text();
};
ProductParser.prototype.parsePrice =function () {
    return $(this.page).find(this.priceSelector()).text();
};
ProductParser.prototype.parseCurrency = function () {
    return $(this.page).find(this.currencySelector()).text();
};
ProductParser.prototype.parsePhoto = function () {
    return $(this.page).find(this.photoSelector()).attr("src");
};

ProductParser.prototype.nameSelector = function () {
    return "#name";
};
ProductParser.prototype.priceSelector = function () {
    return "#price1";

};
ProductParser.prototype.currencySelector = function () {
    return "#price1 .superscriptStyle"

};
ProductParser.prototype.photoSelector = function () {
    return "#productImg";

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
