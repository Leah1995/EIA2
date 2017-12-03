var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    // Solange stop das booleansche Ergebnis false erh�lt, wird der Codeblock ausgef�hrt
    while (!stop) {
        // Variable action gibt prompt aus
        var action = prompt("n= Datensatz anlegen, a= abfragen oder s= Programm beenden \nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=w oder 1=m) und Kommentar");
                alert(saveData(input));
                break; // springt aus der switch-Struktur raus, sobald die case-Alternative ausgewertet worden ist
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true; // true, da die while-Schleife angehalten wird
        }
    } // While-Schleife
    function saveData(_input) {
        // Unterteilen
        let dataArray = _input.split(","); // split gibt ein Array zur�ck
        let studentData = {
            // String in Number verwandeln
            Matrikelnummer: parseInt(dataArray[0]),
            Name: dataArray[1],
            Vorname: dataArray[2],
            Alter: parseInt(dataArray[3]),
            // Eingegebene Zahl (0) kann nachher verwendet werden
            Geschlecht: parseInt(dataArray[4]) == 0,
            Kommentar: dataArray[5]
        };
        // Matrikelnummer pr�fen
        if (Number.isNaN(studentData.Matrikelnummer)) {
            return "Diese Eingabe kann nicht verarbeitet werden";
        }
        students.push(studentData);
        let geschlecht;
        // If-Else f�r Geschlecht
        if (parseInt(dataArray[4]) == 0) {
            geschlecht = "w"; // 0 wird in string verwandelt
        }
        else {
            geschlecht = "m";
        }
        return "Ergebnis: \n" + "Matrikelnummer: " + studentData.Matrikelnummer + "\nName: " + studentData.Name + "\nVorname: "
            + studentData.Vorname + "\nAlter: " + studentData.Alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + studentData.Kommentar;
    } // Sava-Data
    function queryData(_matrikelnummer) {
        // Pr�fen, ob Matrikelnummer schon abgespeichert wurde
        for (let i = 0; i < students.length; i++) {
            // wenn sie schon eingegeben wurde:
            if (students[i].Matrikelnummer == _matrikelnummer) {
                // Variable als Interface-Parameter speichern                
                let geschlecht = students[i].Geschlecht ? "w" : "m";
                return "Folgende Daten wurden zu dieser Nummer gefunden " + students[i].Matrikelnummer + "\nName: " + students[i].Name + ", "
                    + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].Kommentar;
            }
            else {
            }
        } // Ende der For-Schleife
        return "Die Nummer wurde leider nicht gefunden";
    } // Query-Data
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Aufg7.js.map