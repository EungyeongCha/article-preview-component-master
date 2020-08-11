let btn = document.getElementById("share");
btn.addEventListener("click", shareClick);
btn.addEventListener("click", shareClick2);

function shareClick() {
    let tooltip = document.querySelector(".tooltip");
    if (tooltip.style.visibility == "hidden") {
        tooltip.style.visibility = "visible";
    } else {
        document.querySelector(".tooltip").style.visibility = "hidden";
    }
}

function shareClick2() {
    let tooltip = document.querySelector(".tooltip");
    if (tooltip.style.visibility == "visible") {
        tooltip.style.visibility = "hidden";
    } else {
        document.querySelector(".tooltip").style.visibility = "visible";
    }
}