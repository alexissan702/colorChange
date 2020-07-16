var clicker = document.getElementById("click");
var colorDisplay = document.getElementById("color");


clicker.addEventListener("click", colorChange)

function colorChange() {
    
if ( colorDisplay.classList.contains("blue") ) {
        console.log("1");
        colorDisplay.classList.remove("blue");
        colorDisplay.classList.add("red");

    }
else {
    colorDisplay.classList.remove("red");
    colorDisplay.classList.add("blue");
    }
}

