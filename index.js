let clicker = document.getElementById("clicker");


function changeColor(){
    let one = Math.floor((Math.random() * 255) + 1);
    let two = Math.floor((Math.random() * 255) + 1);
    let three = Math.floor((Math.random() * 255) + 1);
    let color = `rgb(${one},${two}, ${three})`;
    document.body.style.backgroundColor = color;
    let codes = document.getElementById("codes");
    let title = document.getElementById("title");
    codes.innerHTML = `RGB - ${one}, ${two}, ${three}`;
    if (one + two + three < 250){
        codes.style.color = "white";
        title.style.color = "white";
    }
    if (one + two + three > 250){
        codes.style.color = "black";
        title.style.color = "black";
    }
}

clicker.addEventListener("click", changeColor)

