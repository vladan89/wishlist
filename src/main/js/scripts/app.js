import "../application/index.js";
var path=require("path");

import ProductParser from "./parser/ProductParser";
import IkeaProductParser from "./parser/IkeaProductParser";

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

String.prototype.startsWithHttp = function(){
    return this.substring(0, 7) === "http://";
}

String.prototype.startsWithHttps = function(){
    return this.substring(0, 7) === "https://";
}

String.prototype.prependHttp = function(){
    return "http://"+this;
}

String.prototype.prependHttps = function(){
    return "https://"+this;
}

String.prototype.getUrlOrigin = function () {
    var url = this.split("/");
    return url[0]+"//"+url[2];
}