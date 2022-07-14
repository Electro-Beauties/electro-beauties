const desktopWallpapers = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
const mobileWallpapers = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

let container = document.getElementById("container");

let pTotal = document.getElementById("imgtotal");

pTotal.textContent = "Number of Images: " + desktopWallpapers.length;

container.className = "imgcon";

let count;

count = 0;

function Generate() {

    let img = document.createElement("img"); 
    let link = document.createElement("a");
    let pAlt = document.createElement("p");
    
    img.className = "wallimg";

    count++;

    link.setAttribute("href", `/images/desktop-wallpaper/${count}.jpg`);
    img.setAttribute("src", `/images/desktop-wallpaper/${count}.jpg`);
    link.setAttribute("target", "_blank");
    pAlt.textContent = "Image Number: " + count;

    link.appendChild(pAlt);
    container.appendChild(link);
    link.appendChild(img);
    //console.log(count);
}

desktopWallpapers.forEach(Generate);
