
const imgs = ["/images/wallpaper/1 (","/images/wallpaper/1 (","/images/wallpaper/1 ("];

let container = document.getElementById("container");

let count;

count = 0;

function Generate() {

    let img = document.createElement("img"); 
    let link = document.createElement("a");
    
    img.className = "artimg";

    count++;

    link.setAttribute("href", `/images/wallpaper/1 (${count}).jpg`);
    img.setAttribute("src", `/images/wallpaper/1 (${count}).jpg`);

    container.appendChild(link);
    link.appendChild(img);
    //console.log(count);
}

imgs.forEach(Generate);