localStorage.getItem("age");

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