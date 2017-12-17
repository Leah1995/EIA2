namespace Aufgabe9 {

    window.addEventListener("load", init);
    let letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let saveLetter: string = ""; // Angeklickter Buchstabe wird gespeichert
    let amount: number = letters.length;

    //Buchstaben erstellen
    function init(): void {

        if (amount == letters.length) {
            for (let i: number = 0; i < letters.length; i++) {
                drawBuchstaben(letters[i]);
            }
        }

        drawBrief();

    }
    
    function keyDown(data: any): void {
    console.log("Key down");
    console.log(data.key);
    }

//    // Tastaturbefehle
//    //    function handleKeys(_event: KeyEvent): void {
//    //        keys.style.color = "white";
//    //        keys.style.backgroundSize = "30px";
//    //        saveLetter = keys.id;
//    //    }

    //Farbe ändern beim Klicken und Buchstaben auswählen
    function writeLetters(event: MouseEvent): void {

        let click: HTMLDivElement = <HTMLDivElement>event.target;
        click.style.color = "white";
        click.style.fontSize = "150%";
        saveLetter = click.id;

        // A NodeList object is a list (collection) of nodes extracted from a document
        let collect: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letters");

        for (let i: number = 0; i < collect.length; i++) {
            if (saveLetter != collect[i].id) {
                collect[i].style.color = "black"; // nicht angeklickte Buchstaben
                collect[i].style.fontSize = "100%";
            }
        }
    } // Funktion


    // Platz für Brief
    function drawBrief(): void {

        let letter: HTMLDivElement = document.createElement("div");
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
    function drawBuchstaben(_buchstaben: string): void {

        let div: HTMLDivElement = document.createElement("div");
        div.style.height = "5%";
        div.style.width = "3%";
        div.style.margin = "0.2%";
        div.style.fontSize = "100%";
        div.style.fontFamily = "Anton";
        div.style.color = "black";
        div.innerText = _buchstaben;
        div.style.backgroundColor = "hsl(" + Math.random() * 30 + ", 15%, 70%)"; // zufällige Hintergrundfarbe der Boxen
        div.style.textAlign = "center";
        div.id = _buchstaben; // vergleicht Buchstaben miteinander
        div.className = "letters";

        div.addEventListener("click", writeLetters);
        document.body.appendChild(div);
    } // Funktion

    //Buchstaben im Brief mit der Maus
    function setLetters(event: MouseEvent): void {
        let box: HTMLDivElement = document.createElement("div");

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

        let clicking: HTMLDivElement = <HTMLDivElement>event.target;
    } // Funktion
    
//    //Buchstaben im Brief mit der Maus
//    function keyDown(letters: string): void {
//        console.log "
//        let key: HTMLDivElement = document.createElement("div");
//
//        key.innerText = saveLetter;
//        key.style.width = "35px";
//        key.style.height = "35px";
//        key.style.marginLeft = "2px";
//        key.style.marginRight = "2px";
//        key.style.fontSize = "30px";
//        key.style.fontFamily = "Anton";
//        key.style.position = "absolute";
//        key.style.left = _event.pageX + "px";
//        key.style.top = _event.pageY + "px";
//
//        key.addEventListener("type", typeLetters);
//        document.body.appendChild(key);
//
//        let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
//    } // Funktion

} // namespace

