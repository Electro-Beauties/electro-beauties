"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",];

let container = document.getElementById("container");

container.className = "imgcon";

let pTotal = document.getElementById("imgtotal");

pTotal.textContent = "Number of Images: " + imgs.length;

let count;

count = 0;

function Generate() {

    let img = document.createElement("img"); 
    let link = document.createElement("a");
    let pAlt = document.createElement("p");
    
    img.className = "artimg";

    count++;

    link.setAttribute("href", `/images/normals/1 (${count}).jpg`);
    img.setAttribute("src", `/images/icons-normals/1 (${count}).jpg`);
    link.setAttribute("target", "_blank");
    pAlt.textContent = "Image Number: " + count;

    link.appendChild(pAlt);
    container.appendChild(link);
    link.appendChild(img);
    //console.log(count);
}

imgs.forEach(Generate);
