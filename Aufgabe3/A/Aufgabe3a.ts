document.addEventListener('DOMContentLoaded', function () {
     var n = 64; // Felder haben die Anzahl 64
     var size = 120;
 document.addEventListener('DOMContentLoaded', () { // keine anonymen Funktionen nutzen!
     var n = 64; // Felder haben die Anzahl 64 
     var size = 120; // hier fehlen überall die Typdeklarationen!
      var reihe = 1;
     for (var i = 0; i < n; i++) {
    let (var i = 0; i < n; i++) {
          if (reihe % 2 != 0) { // Modulo anwenden -> wenn ungerade
              if (i % 2 == 0) {
                  color = "black";
document.addEventListener('DOMContentLoaded', function () {
          }
      }
      writerice();
    function writerice() {
     function writerice() { // Typdeklaration fehlt!
          var feld = document.getElementsByClassName("fields");
          var rice;
          for (var j = 0; j < feld.length; j++) {
document.addEventListener('DOMContentLoaded', function () {
      }
      var divList = document.getElementsByTagName("div");
      for (var i_1 = 0; i_1 < 9; i_1++) {
         divList[i_1].addEventListener("click", function () {
         divList[i_1].addEventListener("click", function () {  // keine anonymen und verschachtelten Funktionen nutzen!
              this.classList.toggle("select");
              showsumrice();
          });
document.addEventListener('DOMContentLoaded', function () {
          }
      }
  });
 document.addEventListener("mousemove", function (Event) {
 document.addEventListener("mousemove", function (Event) {  // parametername entspricht nicht unseren Stilvorgaben
      document.getElementById("alpha").style.left = (Event.clientX + 10) + "px";
      document.getElementById("alpha").style.top = (Event.clientY + 10) + "px";
 }); 
 });