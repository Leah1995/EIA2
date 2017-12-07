namespace Boxes {
    window.addEventListener("load", input);
    function input(): void {
//        let boxes: string = prompt("Hier eine Zahl zwischen 10 und 100 eingeben.");
        var boxNumber: any = prompt("Hier eine Zahl zwischen 10 und 100 eingeben.");

        //        if (boxNumber >= 10 && boxNumber <= 100) { // Vergleichsoperator gleich bzw. drunter/drüber
        //            for (let i: number = 0; i < boxNumber; i++) {
        //                drawBox(Math.random() * window.innerWidth, Math.random() * window.innerHeight, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
        //            }
        //        }
        //        // wenn etwas falsches eingegeben wurde
        //        else {
        //            alert("Nochmal versuchen");
        //            init();
        //        }
        
        if (Number.isNaN(parseInt(boxNumber)) || parseInt(boxNumber) < 10 || parseInt(boxNumber) > 100) {
            alert("Eingabe ist falsch");
            input();
        } // if
        else {
            for (var i: number = 0; i < parseInt(boxNumber); i++) {
                init(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 360);
            }
        }
    }  // Input


    // Boxen zeichnen
    function init(_x: number, y: number, _color: string): void {
        let box: HTMLDivElement = document.createElement("div"); // erstelle Methode
        box.style.width = "40px";
        box.style.height = "40px";
        box.style.backgroundColor = _color;
        box.style.borderStyle = "solid";
        box.style.borderWidth = "1em";
        box.style.borderColor = "black";
        document.body.appendChild(box); // Element aus HTML an den Code abgeben


    }
} // Namespace

