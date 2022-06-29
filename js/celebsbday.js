let dob = new Date("06/24/2008");

let month_diff = Date.now() - dob.getTime();

let bdaycon = document.getElementById("bdaycon");

bdaycon.textContent = "" + month_diff
