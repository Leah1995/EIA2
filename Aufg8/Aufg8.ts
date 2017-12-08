namespace Aufgabe8 {
    window.addEventListener("load", input);
    function input(): void {

        var boxNumber: string = prompt("Hier eine Zahl zwischen 10 und 100 eingeben.");

        if (parseInt(boxNumber) >= 10 && (parseInt(boxNumber)) <= 100) { // Vergleichsoperator gleich bzw. drunter/drüber
            alert("Konfetti!");
            for (let i: number = 0; i < parseInt(boxNumber); i++) {
                init(Math.random() * window.innerWidth, Math.random() * window.innerHeight, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            }
        }
        
        // wenn etwas falsches eingegeben wurde
        else {
            alert("Nochmal versuchen");
            input();
        }

    }  // Input

    // Boxen zeichnen
    function init(x: number, y: number, _color: string): void {
        let box: HTMLDivElement = document.createElement("div"); // erstelle Methode
        // Größe
        box.style.width = "7px";
        box.style.height = "7px";
        //Farbe
        box.style.backgroundColor = _color;
        // Rand
        box.style.borderStyle = "solid";
        box.style.borderWidth = "2px";
        box.style.borderColor = "hsl(" + Math.random() * 360 + ", 70%, 30%)";
        // rotieren
        box.style.transform = "rotate(50deg)";
        // Position
        box.style.bottom = y + "px";
        box.style.left = x + "px";
        document.body.appendChild(box); // Element aus HTML an den Code abgeben
    }

} // Namespace