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