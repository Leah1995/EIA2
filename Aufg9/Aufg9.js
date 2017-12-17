var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let saveLetter = ""; // Angeklickter Buchstabe wird gespeichert
    let amount = letters.length;
    //Buchstaben erstellen
    function init() {
        if (amount == letters.length) {
            for (let i = 0; i < letters.length; i++) {
                drawBuchstaben(letters[i]);
            }
        }
        drawBrief();
    }
    function keyDown(data) {
        console.log("Key down");
        console.log(data.key);
    }
    //    // Tastaturbefehle
    //    //    function handleKeys(_event: KeyEvent): void {
    //    //        keys.style.color = "white";
    //    //        keys.style.backgroundSize = "30px";
    //    //        saveLetter = keys.id;
    //    //    }
    //Farbe �ndern beim Klicken und Buchstaben ausw�hlen
    function writeLetters(event) {
        let click = event.target;
        click.style.color = "white";
        click.style.fontSize = "150%";
        saveLetter = click.id;
        // A NodeList object is a list (collection) of nodes extracted from a document
        let collect = document.getElementsByClassName("letters");
        for (let i = 0; i < collect.length; i++) {
            if (saveLetter != collect[i].id) {
                collect[i].style.color = "black"; // nicht angeklickte Buchstaben
                collect[i].style.fontSize = "100%";
            }
        }
    } // Funktion
    // Platz f�r Brief
    function drawBrief() {
        let letter = document.createElement("div");
        letter.style.backgroundColor = "hsl(" + Math.random() * 80 + ", 15%, 75%)";
        letter.style.width = "90%";
        letter.style.height = "350px";
        letter.style.margin = "1%";
        letter.style.border = "30px ridge hsl(" + Math.random() * 80 + ", 25%, 85%)";
        letter.style.borderRadius = "50px";
        //        letter.style.transform = "skew(5deg)"; 
        letter.addEventListener("click", setLetters);
        document.body.appendChild(letter);
    } // Funktion
    // anklickbare Buchstaben
    function drawBuchstaben(_buchstaben) {
        let div = document.createElement("div");
        div.style.height = "5%";
        div.style.width = "3%";
        div.style.margin = "0.2%";
        div.style.fontSize = "100%";
        div.style.fontFamily = "Anton";
        div.style.color = "black";
        div.innerText = _buchstaben;
        div.style.backgroundColor = "hsl(" + Math.random() * 30 + ", 15%, 70%)"; // zuf�llige Hintergrundfarbe der Boxen
        div.style.textAlign = "center";
        div.id = _buchstaben; // vergleicht Buchstaben miteinander
        div.className = "letters";
        div.addEventListener("click", writeLetters);
        document.body.appendChild(div);
    } // Funktion
    //Buchstaben im Brief mit der Maus
    function setLetters(event) {
        let box = document.createElement("div");
        box.innerText = saveLetter;
        box.style.width = "35px";
        box.style.height = "35px";
        box.style.marginLeft = "2px";
        box.style.marginRight = "2px";
        box.style.fontSize = "30px";
        box.style.fontFamily = "Anton";
        box.style.position = "absolute";
        box.style.left = event.pageX + "px";
        box.style.top = event.pageY + "px";
        box.addEventListener("click", setLetters);
        document.body.appendChild(box);
        let clicking = event.target;
    } // Funktion
})(Aufgabe9 || (Aufgabe9 = {})); // namespace
//# sourceMappingURL=Aufg9.js.map