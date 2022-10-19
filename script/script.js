const arrow = document.querySelector("arrow");
const arrowBox = document.querySelector(".arrow-box");


function scrollArrow(x, y) {
    window.scrollTo(x, y);
}

window.onscroll = function() {navScroll()};
function navScroll() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        
        document.querySelector(".nav").style.opacity = "0%";
        document.querySelector(".nav").style.top = "-100px";

    } else {
        
        document.querySelector(".nav").style.opacity = "100%";
        document.querySelector(".nav").style.top = "0px";

    }
}
navScroll()