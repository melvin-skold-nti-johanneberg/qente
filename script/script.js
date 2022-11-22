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
        document.querySelector("#logo").style.width = "120px";
        document.querySelector(".nav").style.paddingTop = "1.5em";

    } else {
        
        document.querySelector(".nav").style.backgroundColor = "transparent";
        document.querySelector(".nav").style.top = "0px";
        document.querySelector("#logo").style.width = "120px";
        document.querySelector(".nav").style.paddingTop = "0em";

    }
}
navScroll()

const navText = document.getElementById("navText1");
const dropdownMenu = document.getElementById("nav-dropdown");

let elementsArray = document.querySelectorAll(".navText");
dropdownMenu.addEventListener("mouseout", navDropdownHoverOut);
dropdownMenu.addEventListener("mouseover", navDropdownListHoverOver);

elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function(navDropdownHoverOver) {
        //this function does stuff
        dropdownMenu.style.top = "0"
        dropdownMenu.style.paddingTop = "4em"
        document.querySelector(".nav").style.backgroundColor = "var(--white)";
    });
});

function navDropdownListHoverOver() {
    dropdownMenu.style.top = "0"
    dropdownMenu.style.paddingTop = "4em"
    document.querySelector(".nav").style.backgroundColor = "var(--white)";

}

function navDropdownHoverOut() {
        document.querySelector(".nav").style.backgroundColor = "var(--white)";
        dropdownMenu.style.top = "-50vh"
        dropdownMenu.style.paddingTop = "0"
}

const cardWrapper = document.querySelector(".card-wrapper");
const gradLeft = document.querySelector(".gradientLeft");
const gradRight = document.querySelector(".gradientRight");
const arrowBoxLeft = document.querySelector("#box-left");
const arrowBoxRight = document.querySelector("#box-right");


const maxScrollLeft = document.querySelector(".card-wrapper").scrollWidth - document.querySelector(".card-wrapper").clientWidth;

document.querySelector(".card-wrapper").onscroll = function CardGradientScroll() {
    if (cardWrapper.scrollLeft > maxScrollLeft/2) {
        gradLeft.style.opacity = "1";
        gradRight.style.opacity = "0";

        arrowBoxLeft.style.opacity = "1"
        arrowBoxRight.style.opacity = "0"

    }
    else {
        gradLeft.style.opacity = "0";
        gradRight.style.opacity = "1";

        arrowBoxLeft.style.opacity = "0"
        arrowBoxRight.style.opacity = "1"
    }
}

function cardWrapperScrollRight(x, y) {
    cardWrapper.scrollBy(x, y);
}