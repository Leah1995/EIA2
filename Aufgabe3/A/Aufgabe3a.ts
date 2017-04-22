document.addEventListener('DOMContentLoaded', function () { <-- keine anonymen Funktionen nutzen!
    var n = 64; // Felder haben die Anzahl 64 
    var size = 120; <-- hier fehlen überall die Typdeklarationen!
    var reihe = 1;
    for (var i = 0; i < n; i++) { <-- besser let nutzen
        if (reihe % 2 != 0) { // Modulo anwenden -> wenn ungerade
            if (i % 2 == 0) {
                color = "black";
            }
            else {
                color = "white";
            }
        }
        else {
            if (i % 2 == 0) { // Modulo anwenden -> wenn gerade
                color = "white";
            }
            else {
                color = "black";
            }
        }
        x = (i % 8) * size; // Modulo anwenden und mit Größe multiplizieren
        y = (reihe - 1) * size;
        placeDiv(color, x, y, size, i);
        if (x == (7 * size)) {
            reihe++;
        }
    }
    writerice();
    function writerice() { <-- Typdeklaration fehlt!
        var feld = document.getElementsByClassName("fields");
        var rice;
        for (var j = 0; j < feld.length; j++) {
            rice = Math.pow(2, j);
            if (j > 23) {
                rice = rice.toExponential(5);
            }
            feld[j].textContent = rice.toString();
        }
    }
    function placeDiv(_color, _x, _y, _size, _counter) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        var s = div.style;
        s.position = "absolute";
        s.display = "inline-block";
        div.className += _color;
        div.className += " fields";
        s.width = _size + "px";
        s.height = _size + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
    var divList = document.getElementsByTagName("div");
    for (var i_1 = 0; i_1 < 9; i_1++) {
        divList[i_1].addEventListener("click", function () {  <-- keine anonymen und verschachtelten Funktionen nutzen!
            this.classList.toggle("select");
            showsumrice();
        });
    }
    function showsumrice() {
        var selectDivs = document.getElementsByClassName("select");
        var sumrice = 0;
        if (selectDivs.length == 0) {
            document.getElementById("alpha").style.display = "none";
        }
        else {
            document.getElementById("alpha").style.display = "inline-block";
        }
        for (var i_2 = 0; i_2 < selectDivs.length; i_2++) {
            sumrice += Number(selectDivs[i_2].textContent);
            document.getElementById("alpha").textContent = "sum of selected rice:" + "\r\n" + "Dezimal: " + sumrice.toString() + "\r\n" + "Hexadezimal: " + sumrice.toString(16);
        }
    }
});
document.addEventListener("mousemove", function (Event) {  <-- parametername entspricht nicht unseren Stilvorgaben
    document.getElementById("alpha").style.left = (Event.clientX + 10) + "px";
    document.getElementById("alpha").style.top = (Event.clientY + 10) + "px";
});
