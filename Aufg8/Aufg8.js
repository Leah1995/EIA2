var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", input);
    function input() {
        var boxNumber = prompt("Hier eine Zahl zwischen 10 und 100 eingeben.");
        if (parseInt(boxNumber) >= 10 && (parseInt(boxNumber)) <= 100) {
            alert("Konfetti!");
            for (let i = 0; i < parseInt(boxNumber); i++) {
                init(Math.random() * window.innerWidth, Math.random() * window.innerHeight, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            }
        }
        else {
            alert("Nochmal versuchen");
            input();
        }
    } // Input
    // Boxen zeichnen
    function init(x, y, _color) {
        let box = document.createElement("div"); // erstelle Methode
        box.style.width = "7px";
        box.style.height = "7px";
        box.style.backgroundColor = _color;
        box.style.borderStyle = "solid";
        box.style.borderWidth = "2px";
        box.style.borderColor = "hsl(" + Math.random() * 360 + ", 70%, 30%)";
        box.style.transform = "rotate(50deg)";
        box.style.bottom = y + "px";
        box.style.left = x + "px";
        document.body.appendChild(box); // Element aus HTML an den Code abgeben
    }
})(Aufgabe8 || (Aufgabe8 = {})); // Namespace
//# sourceMappingURL=Aufg8.js.map