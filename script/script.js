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

function CardGradientScrollRight() {
    if (document.querySelector(".gradient").scrollLeft > 10) {
        document.querySelector(".gradient").style.background = "linear-gradient(90deg, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 100%)";
    } else {
        ocument.querySelector(".gradient").style.background = "transparent";

    }
}