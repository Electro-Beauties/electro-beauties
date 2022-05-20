const imgs = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",];

console.log(imgs.length);

localStorage.getItem("age");

let container = document.getElementById("container");

container.className = "imgcon";

let submit = document.getElementById("submit");
let age = document.getElementById("age");
let form = document.getElementById("form");

let pTotal = document.getElementById("imgtotal");

pTotal.textContent = "Number of Videos: " + imgs.length;

let img;
let link;
let pAlt;

let Bool = true;

//console.log(localStorage.getItem("age") + " " + localStorage.getItem("bool"));

container.style.visibility = "hidden";

if(localStorage.getItem("age") >= 18) {
    container.style.visibility = "visible";

    form.style.visibility = "hidden";
    
}
else {
    

    alert("WARNING! This is an explicit webpage. You are required to be over 18 years of age to view!");
    
    container.style.visibility = "hidden";

}

function Submit() {

    age = document.getElementById("age").value;


    localStorage.setItem("age", age);

    location.reload();
}

let count;

count = 0;

function Generate() {

    img = document.createElement("video"); 
    link = document.createElement("a");
    pAlt = document.createElement("p");
    
    img.className = "artimg";
    pAlt.className = "pAlt";
    link.ClassName = "linkimg";

    count++;

    link.setAttribute("href", `/videos/1 (${count}).mp4`);
    img.setAttribute("src", `/videos/1 (${count}).mp4`);
    link.setAttribute("target", "_blank");
    pAlt.textContent = "Video Number: " + count;

    link.appendChild(pAlt);
    container.appendChild(link);
    link.appendChild(img);
    //console.log(count);
}

imgs.forEach(Generate);





