let hamBTN;

let theDiv;
let Home;
let Videos;
let Gallery;

let iconImg;

randomFavicon();

function Hamburger() {

    hamBTN = document.getElementById("hamBTN");

    iconImg = document.getElementById("iconimg");

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

    // theDiv.className="mobilelinks";
    Videos.className="mobilelinks";
    Gallery.className="mobilelinks";

    theDiv.setAttribute("href", "/index.html");
    Videos.setAttribute("href", "/html/videos.html");
    Gallery.setAttribute("href", "/html/gallery.html");


    nav.appendChild(theDiv);
    nav.appendChild(Videos);
    nav.appendChild(Gallery);

    hamBTN.setAttribute("onclick", "exit()");

    iconImg.setAttribute("src", "/images/icons/close-yo-mouth.png");

}

function exit() {

    hamBTN = document.getElementById("hamBTN");

    iconImg = document.getElementById("iconimg");

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
    nav.removeChild(Videos);
    nav.removeChild(Gallery);

    hamBTN.setAttribute("onclick", "Hamburger()");

    iconImg.setAttribute("src", "/images/icons/ham-and-cheese.png");

}

function randomFavicon() {

    let favicon = document.getElementById("favicon");

    let ranNum = Math.floor((Math.random() * 1865) + 1);

    favicon.setAttribute("href", `/images/normals/1 (${ranNum}).jpg`)

}