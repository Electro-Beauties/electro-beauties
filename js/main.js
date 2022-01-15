let hamBTN;

let theDiv;
let Home;
let Videos;
let Gallery;

function Hamburger() {

    hamBTN = document.getElementById("hamBTN");

    let nav = document.getElementById("navid");

    theDiv = document.createElement("a");
    Home = document.createElement("a");
    Videos = document.createElement("a");
    Gallery = document.createElement("a");

    theDiv.className = "theDiv";

    theDiv.textContent = "Electro Beauties"
    Home.textContent = "Home";
    Videos.textContent = "Videos";
    Gallery.textContent = "Gallery";

    nav.appendChild(theDiv);
    nav.appendChild(Home);
    nav.appendChild(Videos);
    nav.appendChild(Gallery);

    hamBTN.setAttribute("onclick", "exit()");



}

function exit() {

    hamBTN = document.getElementById("hamBTN");

    let nav = document.getElementById("navid");

    // theDiv = document.createElement("div");
    // Home = document.createElement("a");
    // Videos = document.createElement("a");
    // Gallery = document.createElement("a");

    theDiv.className = "theDiv";

    theDiv.textContent = "Electro Beauties"
    Home.textContent = "Home";
    Videos.textContent = "Videos";
    Gallery.textContent = "Gallery";

    nav.removeChild(theDiv);
    nav.removeChild(Home);
    nav.removeChild(Videos);
    nav.removeChild(Gallery);

    hamBTN.setAttribute("onclick", "Hamburger()");

}