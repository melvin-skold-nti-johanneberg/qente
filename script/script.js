const arrow = document.querySelector("arrow");
const arrowBox = document.querySelector(".arrow-box");


function scrollArrow(x, y) {
    window.scrollTo(x, y);
}

window.onscroll = function() {navScroll()};
function navScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        
        document.querySelector(".nav").style.backgroundColor = "var(--white)";
        document.querySelector(".nav").style.top = "-30px";
        document.querySelector("#logo").style.width = "90px";
        document.querySelector(".nav").style.paddingTop = "1.5em";

    } else {
        
        document.querySelector(".nav").style.backgroundColor = "transparent";
        document.querySelector(".nav").style.top = "0px";
        document.querySelector("#logo").style.width = "120px";
        document.querySelector(".nav").style.paddingTop = "0em";

    }
}
navScroll()


document.querySelector(".card-wrapper").onscroll = function CardGradientScroll() {
    if (document.querySelector(".card-wrapper").scrollLeft > 300) {
        document.querySelector(".gradientLeft").style.opacity = "100%";
        document.querySelector(".gradientRight").style.opacity = "0%";
    }
    else {
        document.querySelector(".gradientLeft").style.opacity = "0%";
        document.querySelector(".gradientRight").style.opacity = "100%";
    }
    
}