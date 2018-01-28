namespace StudiVZ {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        newButton.addEventListener("click", refresh);
    } // Function Ende

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert"; // auf Eingabe zugreifen
        query += "&name=" + inputs[0].value; // Erste Eingabe
        query += "&firstname=" + inputs[1].value; // Zweite Eingabe
        query += "&matrikel=" + inputs[2].value; // Dritte Eingabe
        sendRequest(query, handleInput);
    } // Function Ende

    // Aktualisieren
    function refresh(_event: Event): void {
        let query: string = "command=find";
        sendRequest(query, handleResponse);
    } // Function Ende

    // Anfrage senden
    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", "https://kappelma.herokuapp.com/?" + _query, true); // Verbindung zum Server
        xhr.addEventListener("readystatechange", _callback);
        xhr.send(); 
    } // Function Ende

    // Eingaben umwandeln
    function handleInput(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        // wenn Versuch erfolgreich war
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        } else {
            //etwas lief schief
            alert("Fehler- " + request.status + ": " + request.statusText);
        }
    } // if-Bedingung Ende
} // Function Ende

// Antwort ausgeben
function handleResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = xhr.response;
        console.log("xhr.response " + xhr.response);
        let responseAsJson: JSON = JSON.parse(xhr.response);
        console.log(responseAsJson);
    } // if-Bedingung Ende
} // Function Ende
}