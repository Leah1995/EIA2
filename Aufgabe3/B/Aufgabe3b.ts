document.addEventListener('DOMContentLoaded', function () {  <-- keine anonymen Funktionen nutzen!
    <-- überall fehlen die Typdeklarationen!
    var cards = ["Diamonds 7", "Diamonds 8", "Diamonds 9", "Diamonds 10", "Diamonds Jack", "Diamonds Queen", "Diamonds King", "Diamonds Ace", "Cross 7", "Cross 8", "Cross 9", "Cross 10", "Cross Jack", "Cross Queen", "Cross King", "Cross Ace", "Heart 7", "Heart 8", "Heart 9", "Heart 10", "Heart Jack", "Heart Queen", "Heart King", "Heart Ace", "Spade 7", "Spade 8", "Spade 9", "Spade 10", "Spade Jack", "Spade Queen", "Spade King", "Spade Ace"];
    var HandCards = [];
    var filedCards = [];
    document.getElementById("Draw").addEventListener("click", function () { <-- keine anonymen und verschachtelten Funktionen!
        if (HandCards.length < 5 && cards.length > 0) {
            var cardsnummer = Math.floor((Math.random() * 31) + 0); // zufällige Zahl (zwischen 0 und 31)
            while (cards[cardsnummer] == undefined) {
                cardsnummer = Math.floor((Math.random() * 31) + 0);
            }
            HandCards.push(cards[cardsnummer]); // fügt die Karte der Hand
            cards.splice(cardsnummer, 1); // entfernt gewählte Karte aus dem Stapel
            var div = document.createElement("div"); // Darstellung der Karte auf der Hand
            document.getElementById("Hand").appendChild(div);
            var s = div.style;
            div.className = "Handcards";
            div.textContent = HandCards[HandCards.length - 1];
            div.addEventListener("click", function () {   <-- ebenso hier!
                for (var i = 0; i < HandCards.length; i++) {
                    if (this.textContent == HandCards[i]) {
                        filedCards.push(HandCards[i]); // fügt die Karte dem Filed Array hinzu
                        HandCards.splice(i, 1); // entfernt ausgewählte Karte aus dem Array
                        break;
                    }
                    else { }
                }
                document.getElementById("Filed").textContent = "Filed" + "\r\n" + "Oberste Karte: " + "\r\n" + filedCards[filedCards.length - 1] + "\r\n" + "\r\n" + "Cards: " + filedCards.length.toString();
                document.getElementById("Filed").style.display = "inline-block";
                this.parentNode.removeChild(this);
            });
            document.getElementById("Draw").textContent = "Cardsstapel" + "\r\n" + "Cards: " + cards.length.toString();
        }
        else { }
        ;
    });
});
//# sourceMappingURL=script.js.map
