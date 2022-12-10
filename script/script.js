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





const mobileSize = window.matchMedia("(max-width: 767px)");

if (mobileSize.matches) { /* Media query box */

    let navList = document.querySelector(".navLinks");
    let navItem = navList.querySelectorAll(".navLinks > li")
    var navListChild = navList.lastElementChild
    var createBurgerDiv = document.createElement("div")

    var createBurgerLine1 = document.createElement("div") /* for lines */
    var createBurgerLine2 = document.createElement("div")
    var createBurgerLine3 = document.createElement("div")  /* ^^^^^^ */

    while (navListChild) { /* Remove previous navbar text */
    navList.removeChild(navListChild)
    navListChild = navList.lastElementChild;
    console.log("loop works!")
    } 

    navList.appendChild(createBurgerDiv) /* Create the burger div */
    createBurgerDiv.id = "burgerMenu"; /* Give the burger div a classname */
    console.log("div created!")

    createBurgerDiv.append(createBurgerLine1, createBurgerLine2, createBurgerLine3) /* Create Lines */
    console.log("lines created!")

    createBurgerLine1.className = "burgerLine1" /* Give burgerline class name */
    createBurgerLine2.className = "burgerLine2" /* <-----> */
    createBurgerLine3.className = "burgerLine3" /* <-----> */
    console.log("renamed classnames")



const burgerMenu = document.getElementById("burgerMenu"); 
var burgerMenuBox = document.querySelector(".burgerMenuBox");

function toggleBurgerMenu() { /* function to toggle burgermenu */
    burgerMenuBox.classList.toggle("burgerMenuToggle");
    createBurgerLine1.classList.toggle("burgerLine1On")
    createBurgerLine2.classList.toggle("burgerLine2On")
    createBurgerLine3.classList.toggle("burgerLine3On")


    console.log("Toggled burger!")
}

burgerMenu.addEventListener("touchstart", toggleBurgerMenu); /* listener */


function toggleBurgerMenuListItemsLast() { /* This is to expand and minimize !LAST! burger menu */
    let menuListHeader = document.querySelector("#dropdownMobileTextArrowBoxLast");
    let menuListItem = document.querySelector("#dropdownMobileTinyLast");
    menuListHeader.classList.toggle("dropdownMobileTextArrowBoxOn");
    menuListItem.classList.toggle("dropdownMobileTinyOn");
    console.log("expanded and minimized last one")
}

function toggleBurgerMenuListItemsFirst() { /* This is to expand and minimize !FIRST! burger menu */
    let menuListHeader = document.querySelector("#dropdownMobileTextArrowBoxFirst");
    let menuListItem = document.querySelector(".dropdownMobileTinyFirst");
    menuListItem.classList.toggle("dropdownMobileTinyOn");
    menuListHeader.classList.toggle("dropdownMobileTextArrowBoxOn");
    console.log("expanded and minimized first one")
}

var dropdownMobileTextArrowBoxLast = document.getElementById("dropdownMobileTextArrowBoxLast");
function highlightBurgerMenuListItemsLast() { /* this is to highlight the !LAST! box on touch */
    if(dropdownMobileTextArrowBoxLast.style.backgroundColor = "var(--white)")
    dropdownMobileTextArrowBoxLast.style.backgroundColor = "var(--gray)"
    setTimeout(()=> { /* Delay for color to turn back */
        dropdownMobileTextArrowBoxLast.style.backgroundColor = "var(--white)";
     }
     ,100);
}
dropdownMobileTextArrowBoxLast.addEventListener("touchstart", highlightBurgerMenuListItemsLast);

var dropdownMobileTextArrowBoxFirst = document.getElementById("dropdownMobileTextArrowBoxFirst");
function highlightBurgerMenuListItemsFirst() { /* this is to highlight the !FIRST! box on touch */
if(dropdownMobileTextArrowBoxFirst.style.backgroundColor = "var(--white)")
    dropdownMobileTextArrowBoxFirst.style.backgroundColor = "var(--gray)"
setTimeout(()=> { /* Delay for color to turn back */
    dropdownMobileTextArrowBoxFirst.style.backgroundColor = "var(--white)";
 }
 ,100);
}
dropdownMobileTextArrowBoxFirst.addEventListener("touchstart", highlightBurgerMenuListItemsFirst);

function toggleArrowRotationFirst() { /* This is rotation of arrow when expanded/minimized */
    let burgerArrowFirst = document.getElementById("burgerArrowFirst");
    burgerArrowFirst.classList.toggle("burgerArrowFirstOn")
}
dropdownMobileTextArrowBoxFirst.addEventListener("touchstart", toggleArrowRotationFirst);

function toggleArrowRotationLast() { /* This is rotation of arrow when expanded/minimized */
    let burgerArrowLast = document.getElementById("burgerArrowLast");
    burgerArrowLast.classList.toggle("burgerArrowLastOn")
}
dropdownMobileTextArrowBoxLast.addEventListener("touchstart", toggleArrowRotationLast);
}




/*Special kind of code, cursed one might say

 */
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


const maxScrollLeft = document.querySelector(".card-wrapper").scrollWidth - document.querySelector(".card-wrapper").clientWidth;

function cardWrapperScrollRight(x, y) {
    cardWrapper.scrollBy(x, y);
}