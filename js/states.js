const imgs = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

const states = ["Illinois","Colorado","Florida","California","Hawaii","Texas","Pennsylvania","Louisiana","Massachusetts","New York","Washington","New Mexico","Nevada","South Carolina","Tennessee","Mississippi","Connecticut","Georgia","Arizona","New Hampshire","Oregon","North Carolina","Iowa","Wisconsin","Indiana","South Dakota","Maryland","Idaho","Montana","North Dakota","Wyoming","Virginia","Missouri","Ohio","Delaware","Arkansas","Minnesota","Rhode Island","Vermont","Kansas","Kentucky","Michigan","Oklahoma","Utah","West Virginia","Maine","Alabama","New Jersey","Alaska","Nebraska"];


console.log(imgs.length);

localStorage.getItem("age");

let container = document.getElementById("container");

container.className = "imgcon";

let submit = document.getElementById("submit");
let age = document.getElementById("age");
let form = document.getElementById("form");

//let pTotal = document.getElementById("imgtotal");

//pTotal.textContent = "Number of Gifs: " + imgs.length;

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
count1 = 1;

function Generate() {

    img = document.createElement("img"); 
    link = document.createElement("a");
    pAlt = document.createElement("p");
    
    img.className = "artimg";
    pAlt.className = "pAlt";
    link.ClassName = "linkimg";

    count++;
    count1++;

    link.setAttribute("href", `/images/States/${count}.jpg`);
    img.setAttribute("src", `/images/States/${count}.jpg`);
    link.setAttribute("target", "_blank");
    pAlt.textContent = "State: " + states[count] + ": " + count1;

    link.appendChild(pAlt);
    container.appendChild(link);
    link.appendChild(img);
    //console.log(count);
}

imgs.forEach(Generate);




