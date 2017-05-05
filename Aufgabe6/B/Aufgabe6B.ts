namespace StudiVZ {
    interface StudentData {
        matrikelnr: number;
        name: string;
        vorName: string;
        age: number;
        geschlecht: boolean;
        comment: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (bitte mit Komma trennen) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 f�r weiblich oder 1 f�r m�nnlich) und Kommentar");
                alert(saveData(input)); 
                break;
            case "a":
            case "A":
                var matrikelnr: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikelnr));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let dataArr: string[] = _input.split(",");
        let s: StudentData = {
            matrikelnr: parseInt(dataArr[0])
            name: dataArr[1],
            vorName: dataArr[2],
            age: parseInt(dataArr[3]),
            geschlecht: parseInt(dataArr[4]) == 1,
            comment: dataArr[5]
        };

        students.push(s);  //pushe die Daten aus s in die students-kartei damit ein neuer "Student" entsteht

        let gender: string;
        if (parseInt(dataArr[4]) == 1) {   //Wenn die geschlecht-info in der 4. Schublade == 1 eingetippt wurde, dann ist er m�nnlich
            gender = "m�nnlich";
        }
        else {                      //Wurde 0 eingegeben ist er weiblich
            gender = "weiblich";
        }

        //Ausgabe
        return "Deine eingegebenen Daten:\n" + "\nMatrikelnr.: " + s.matrikelnr + "\nName: " + s.name + "," + s.vorName + "\nAlter: " + s.age + "\nGeschlecht: " + gender + "\nKommentar: " + s.comment;
    }

    function queryData(_matrikelnr: number): string {

        for (let i: number = 0; i < students.length; i++) {

            if (students[i].matrikelnr == _matrikelnr) {
                let gender: string = students[i].geschlecht ? "m�nnlich" : "weiblich";
                return "Abgespeicherte Daten zu folgender Matrikelnummer: " + students[i].matrikelnr + "\n\nName: " + students[i].name + "," + students[i].vorName + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }

            else {
                return "nicht vorhanden";
            }
        }
    }
}