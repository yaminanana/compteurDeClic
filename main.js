let clicks = 0;
const monDiv = document.querySelector("div");
function incrementer() {
    clicks += 1;
    monDiv.innerHTML = "Vous avez cliqué " + clicks  + " " + "fois";
}

