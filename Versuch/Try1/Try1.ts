namespace Try {
    interface NameData {
        // what's here?
        }
    var name: NameData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Question (a)\n Answer (b)\n Stop (c)");

        switch (action) {
            case "a":
            case "A":
                var input: string = prompt("Eingabe von \nMe, You, Her");
                alert(saveData(input));
                break;
            case "b":
            case "B":
                var you: number = parseInt(prompt("Who Are You?"));
                alert(queryData(you));
                break;
            case "c":
            case "C":
                stop = true;
        }
    } // Ende switch

    function saveData(_input: string): string {
        return "You're you";
    }
    function queryData(_you: number): string {
        return "You don't know?";
    }
}
