var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init); // Maus
    window.addEventListener("keydown", handleKeydown); // Tastatur
    //Array f�r die Buchstaben
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let saveLetter = ""; // Angeklickter Buchstabe wird gespeichert    
    let chosenLetter;
    //Farbe �ndern beim Klicken und Buchstaben ausw�hlen
    function writtenLetters(event) {
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
        } // for-Schleife
    } // Funktion
    function init(_event) {
        // Platz f�r den Brief
        let brief = document.createElement("div");
        brief.style.width = "90%";
        brief.style.height = "60%";
        brief.style.margin = "1%";
        brief.style.border = "30px ridge hsl(" + Math.random() * 80 + ", 25%, 85%)";
        brief.style.borderRadius = "50px";
        brief.style.backgroundColor = "hsl(" + Math.random() * 80 + ", 55%, 85%)";
        brief.addEventListener("click", setLetter);
        document.body.appendChild(brief);
        // anklickbare Buchstaben
        for (let i = 0; i < letters.length; i++) {
            let div = document.createElement("div");
            div.style.height = "5%";
            div.style.width = "3%";
            div.style.margin = "0.2%";
            div.style.fontFamily = "Anton";
            div.className = "letters";
            div.style.backgroundColor = "hsl(" + Math.random() * 30 + ", 15%, 70%)"; // zuf�llige Hintergrundfarbe der Boxen            
            div.style.textAlign = "center";
            div.innerText = letters[i];
            div.id = letters[i];
            div.addEventListener("click", writeLetters);
            document.body.appendChild(div);
        } // for-Schleife
    } // Funktion
    function writeLetters(_event) {
        let box = _event.target;
        saveLetter = box.innerText;
        chosenLetter = box.id;
        saveLetter = box.id.toUpperCase();
        let divList = document.getElementsByClassName("letter");
        for (let i = 0; i < divList.length; i++) {
            if (chosenLetter != divList[i].id) {
                divList[i].style.color = "black";
            }
        } // for-Schleife
    } // Funktion
    // Buchstaben im Brief mit der Maus
    function setLetter(event) {
        let text = document.createElement("div");
        if (saveLetter == "")
            return;
        text.innerText = saveLetter;
        text.style.width = "35px";
        text.style.height = "35px";
        text.style.marginLeft = "2px";
        text.style.marginRight = "2px";
        text.style.fontSize = "30px";
        text.style.fontFamily = "Anton";
        text.style.position = "absolute";
        text.style.left = event.pageX + "px";
        text.style.top = event.pageY + "px";
        text.addEventListener("click", setLetters);
        document.body.appendChild(text);
    } // Funktion
    // Buchstaben im Brief mit der Tastatur
    function handleKeydown(_event) {
        if (letters.indexOf(_event.key.toUpperCase()) != -1) {
            let remove = document.getElementById(_event.key);
            saveLetter = _event.key.toUpperCase();
        }
    } // Funktion
    // Buchstaben l�schen lassen
    function setLetters(_event) {
        if (_event.altKey == false)
            return;
        else {
            let remove = _event.target;
            document.body.removeChild(remove);
        }
    } // Funktion
})(Aufgabe9 || (Aufgabe9 = {})); // namespace
//# sourceMappingURL=Aufgabe9.js.map