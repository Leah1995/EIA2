var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    } // Function Ende
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert"; // auf Eingabe zugreifen
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInput);
    } // Function Ende
    function refresh(_event) {
        let query = "command=find";
        sendRequest(query, handleResponse);
    } // Function Ende
    // Anfrage senden
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://kappelma.herokuapp.com/?" + _query, true); // Verbindung zum Server
        xhr.addEventListener("readystatechange", _callback);
        xhr.send(); // 
    } // Function Ende
    // Eingaben umwandeln
    function handleInput(_event) {
        let xhr = _event.target;
        // wenn Versuch erfolgreich war
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        } // if-Bedingung Ende
    } // Function Ende
    // Antwort ausgeben
    function handleResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            console.log("xhr.response " + xhr.response);
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        } // if-Bedingung Ende
    } // Function Ende
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=Aufg13.js.map