document.addEventListener('DOMContentLoaded', function () {
    let field = 0;
    let line = 0;
    let rice = 1;
    for (field = 0; field < 64; field++) {
        let div = document.createElement("div");
        div.innerText = "" + rice;
        rice = rice * 2;
        document.body.appendChild(div);
        if (field % 8 == 0) {
            line = line + 1;
        }
        if (line % 2 == 0) {
            if (field % 2 != 0) {
                div.style.backgroundColor = "black";
                div.style.color = "white";
            }
            else {
                div.style.backgroundColor = "white";
            }
        }
        else {
            if (field % 2 != 0) { // Modulo des Felds ungerade
                div.style.backgroundColor = "white"; // Bedingung erf�llt -> Farbe1 ausf�hren
            }
            else {
                div.style.backgroundColor = "black"; // Bedingung nicht erf�llt -> Farbe2 ausf�hren
            }
        }
    }
});
//# sourceMappingURL=chess.js.map