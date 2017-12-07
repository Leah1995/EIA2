var Boxes;
(function (Boxes) {
    window.addEventListener("load", init);
    function init() {
        let boxes = prompt("Hier eine Zahl zwischen 10 und 100 eingeben.");
        let boxNumber = parseInt;
        //        if (boxNumber >= 10 && boxNumber <= 100) { // Vergleichsoperator gleich bzw. drunter/dr�ber
        //            for (let i: number = 0; i < boxNumber; i++) {
        //                drawBox(Math.random() * window.innerWidth, Math.random() * window.innerHeight, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
        //            }
        //        }
        //        // wenn etwas falsches eingegeben wurde
        //        else {
        //            alert("Bitte nochmal versuchen");
        //            init();
        //        }
    } // Init
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