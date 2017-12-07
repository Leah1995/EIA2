var Boxes;
(function (Boxes) {
    window.addEventListener("load", init);
    function init() {
        let boxes = prompt("Hier eine Zahl zwischen 10 und 100 eingeben.");
        let boxesNumber = parseInt;
        if (boxesNumber >= 10 && boxesNumber <= 100) {
            for (let i; i < boxesNumber; i++) {
                drawBox(Math.random() * window.innerWidth - 40, Math.random() * window.innerHeight - 40, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            }
        }
        else {
            alert("Bitte nochmal versuchen");
            init();
        }
    }
    // Boxen zeichnen
    function drawBox(_x, y, _color) {
        let box = document.createElement("div"); // erstelle Methode
        box.style.width = "40em";
        box.style.height = "40em";
        box.style.backgroundColor = _color;
        box.style.borderStyle = "solid";
        box.style.borderWidth = "1em";
        box.style.borderColor = "black";
        document.body.appendChild(box); // Element aus HTML an den Code abgeben
    }
})(Boxes || (Boxes = {})); // Namespace
//# sourceMappingURL=Aufg8.js.map