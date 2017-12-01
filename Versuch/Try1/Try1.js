var Try;
(function (Try) {
    var name = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Question (a)\n Answer (b)\n Stop (c)");
        switch (action) {
            case "a":
            case "A":
                var input = prompt("Eingabe von \nMe, You, Her");
                alert(saveData(input));
                break;
            case "b":
            case "B":
                var you = parseInt(prompt("Who Are You?"));
                alert(queryData(you));
                break;
            case "c":
            case "C":
                stop = true;
        }
    } // Ende switch
    function saveData(_input) {
        return "You're you";
    }
    function queryData(_you) {
        return "You don't know?";
    }
})(Try || (Try = {}));
//# sourceMappingURL=Try1.js.map