namespace StudiVZ {
    interface StudentData {
        Matrikelnummer: number;
        Name: string;
        Vorname: string;
        Alter: number;
        Geschlecht: boolean; // false or true
        Kommentar: string;
    }
    
    var students: StudentData[] = [];
    var stop: boolean = false;
    
    while (!stop) {
        
        var action: string = prompt("n= Datensatz anlegen, a= abfragen oder s= Programm beenden \nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=w oder 1=m) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    } // While-Schleife

    function saveData(_input: string): string {

        let dataArray: string[] = _input.split(",");

        let studentData: StudentData = {

            Matrikelnummer: parseInt(dataArray[0]),
            Name: dataArray[1],
            Vorname: dataArray[2],
            Alter: parseInt(dataArray[3]),
            Geschlecht: parseInt(dataArray[4]) == 0,
            Kommentar: dataArray[5]
        };

        // Matrikelnummer pr�fen
        if (Number.isNaN(studentData.Matrikelnummer)) {
            return "Diese Eingabe kann nicht verarbeitet werden";
        }

        students.push(studentData);
        
        let geschlecht: string;

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

    function queryData(_matrikelnummer: number): string {

        // Pr�fen, ob Matrikelnummer schon abgespeichert wurde
        for (let i: number = 0; i < students.length; i++) {

            // wenn sie schon eingegeben wurde:
            if (students[i].Matrikelnummer == _matrikelnummer) {
                
                // Variable als Interface-Parameter speichern 
                let geschlecht: string = students[i].Geschlecht ? "w" : "m";
                
                return "Folgende Daten wurden zu dieser Nummer gefunden " + students[i].Matrikelnummer + "\nName: " + students[i].Name + ", "
                    + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].Kommentar;
            }

            else {
                // Als Fehler ausgeben f�r den Benutzer
            }
        } // Ende der For-Schleife
        
        return "Die Nummer wurde leider nicht gefunden";

    }  // Query-Data
}