function SearchExplicitArt() {

    let Searchthing = document.getElementById("search").value;
    let link = document.getElementById("liink");
    let img = document.getElementById("iimg");

    link.setAttribute("href", `/images/explicit/1 (${Searchthing}).jpg`);
    img.setAttribute("src", `/images/explicit/1 (${Searchthing}).jpg`);
    img.setAttribute("width", "400px");
    img.ClassName = "searchImgClass";

}

function SearchArt() {

    let Searchthing = document.getElementById("search").value;
    let link = document.getElementById("liink");
    let img = document.getElementById("iimg");

    link.setAttribute("href", `/images/normals/1 (${Searchthing}).jpg`);
    img.setAttribute("src", `/images/normals/1 (${Searchthing}).jpg`);
    img.setAttribute("width", "400px");
    img.ClassName = "searchImgClass";

}

function SearchExplicitImg() {

    let Searchthing = document.getElementById("search").value;
    let link = document.getElementById("liink");
    let img = document.getElementById("iimg");

    link.setAttribute("href", `/images/explicitwallpaper/1 (${Searchthing}).jpg`);
    img.setAttribute("src", `/images/explicitwallpaper/1 (${Searchthing}).jpg`);
    img.setAttribute("width", "400px");
    img.ClassName = "searchImgClass";

}

function SearchImg() {

    let Searchthing = document.getElementById("search").value;
    let link = document.getElementById("liink");
    let img = document.getElementById("iimg");

    link.setAttribute("href", `/images/wallpaper/1 (${Searchthing}).jpg`);
    img.setAttribute("src", `/images/wallpaper/1 (${Searchthing}).jpg`);
    img.setAttribute("width", "400px");
    img.ClassName = "searchImgClass";

}