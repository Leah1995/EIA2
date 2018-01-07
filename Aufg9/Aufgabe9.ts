namespace Aufgabe9 {

    window.addEventListener("load", init); // Maus
    window.addEventListener("keydown", handleKeydown); // Tastatur

    //Array für die Buchstaben
    let letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let saveLetter: string = ""; // Angeklickter Buchstabe wird gespeichert    
    let chosenLetter: string;

      //Farbe ändern beim Klicken und Buchstaben auswählen
    function writtenLetters(event: MouseEvent): void {

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
        } // for-Schleife
    } // Funktion
    
   
    
    function init(_event: Event): void {
        
        // Platz für den Brief
        let brief: HTMLDivElement = document.createElement("div");
        brief.style.width = "90%";
        brief.style.height = "60%";
        brief.style.margin = "1%";
        brief.style.border = "30px ridge hsl(" + Math.random() * 80 + ", 25%, 85%)";
        brief.style.borderRadius = "50px";
        brief.style.backgroundColor = "hsl(" + Math.random() * 80 + ", 55%, 85%)";

        brief.addEventListener("click", setLetter);
        document.body.appendChild(brief);
        
        // anklickbare Buchstaben
        for (let i: number = 0; i < letters.length; i++) {
            let div: HTMLDivElement = document.createElement("div");

            div.style.height = "5%";
            div.style.width = "3%";
            div.style.margin = "0.2%";
            div.style.fontFamily = "Anton";
            div.className = "letters";
            div.style.backgroundColor = "hsl(" + Math.random() * 30 + ", 15%, 70%)"; // zufällige Hintergrundfarbe der Boxen            
            div.style.textAlign = "center";
            div.innerText = letters[i];
            div.id = letters[i];
            
            div.addEventListener("click", writeLetters);
            document.body.appendChild(div);
        } // for-Schleife
        
    } // Funktion


    
    function writeLetters(_event: MouseEvent): void {
        let box: HTMLElement = <HTMLElement>_event.target;

        
        saveLetter = box.innerText;
        chosenLetter = box.id;
        saveLetter = box.id.toUpperCase();

        let divList: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letter");
        for (let i: number = 0; i < divList.length; i++) {
            if (chosenLetter != divList[i].id) {
                divList[i].style.color = "black";
            }
        } // for-Schleife
    } // Funktion


    // Buchstaben im Brief mit der Maus
    function setLetter(event: MouseEvent): void {
        let text: HTMLDivElement = document.createElement("div");

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
    function handleKeydown(_event: KeyboardEvent): void {
        if (letters.indexOf(_event.key.toUpperCase()) != -1) {
            let remove: HTMLDivElement = <HTMLDivElement>document.getElementById(_event.key);
            saveLetter = _event.key.toUpperCase();
        }
    } // Funktion

    // Buchstaben löschen lassen
    function setLetters(_event: MouseEvent): void {
        if (_event.altKey == false)
            return;

        else {
            let remove: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(remove);
        }
    } // Funktion

} // namespace