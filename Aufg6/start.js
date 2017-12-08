var Aufgabe6;
(function (Aufgabe6) {
    let object = [];
    let image;
    window.addEventListener("load", init);
    // Initialisierung
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe6.crc2 = canvas.getContext("2d");
        console.log(Aufgabe6.crc2);
        console.log("setTimeout");
        //Schleife Skifahrer
        for (let i = 0; i < 4; i++) {
            let s = new Aufgabe6.Skifahrer(Math.random() * canvas.width + 50, -60); // Startpunkt
            object.push(s);
            // Skifahrer tauchen wieder auf
            if (this.x > 800) {
                this.x = 0;
                this.y = 10;
            }
        }
        //Schleife Schneeflocken       
        for (let i = 0; i < 80; i++) {
            let s = new Aufgabe6.Schnee(0 + Math.random() * canvas.width, 0 + Math.random() * 450);
            object.push(s);
        }
        // Sky
        Aufgabe6.crc2.fillStyle = "#ccf5ff";
        Aufgabe6.crc2.fillRect(0, 0, 800, 370);
        // Schneelandschaft
        Aufgabe6.crc2.fillStyle = "#f2f2f2";
        Aufgabe6.crc2.fillRect(0, 370, 800, 20);
        // Berg 1
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.moveTo(150, 370); // x-Anfang, y-Anfang
        Aufgabe6.crc2.lineTo(450, 370);
        Aufgabe6.crc2.lineTo(370, 300);
        Aufgabe6.crc2.fill();
        // Berg 2
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "#c2d6d6";
        Aufgabe6.crc2.moveTo(-50, 370); // x-Anfang, y-Anfang
        Aufgabe6.crc2.lineTo(320, 370);
        Aufgabe6.crc2.lineTo(230, 270);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.fill();
        // Berg 3
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "#e6e6e6";
        Aufgabe6.crc2.moveTo(400, 370); // x-Anfang, y-Anfang
        Aufgabe6.crc2.lineTo(670, 370);
        Aufgabe6.crc2.lineTo(510, 270);
        Aufgabe6.crc2.fill();
        // Berg 4
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "#d9d9d9";
        Aufgabe6.crc2.moveTo(370, 370); // x-Anfang, y-Anfang
        Aufgabe6.crc2.lineTo(700, 250);
        Aufgabe6.crc2.lineTo(850, 370);
        Aufgabe6.crc2.fill();
        //Skilift
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "black";
        Aufgabe6.crc2.fillRect(0, 170, 800, 15); // Anfang, H�he, L�nge, Dicke
        // Skisitz 1
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "black";
        Aufgabe6.crc2.fillRect(570, 170, 10, 45);
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "black";
        Aufgabe6.crc2.fillRect(650, 170, 10, 45);
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "black";
        Aufgabe6.crc2.fillRect(540, 200, 150, 120);
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "#F8FCFE";
        Aufgabe6.crc2.fillRect(570, 230, 100, 70);
        // Skisitz
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "black";
        Aufgabe6.crc2.fillRect(170, 170, 10, 45);
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "black";
        Aufgabe6.crc2.fillRect(250, 170, 10, 45);
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "black";
        Aufgabe6.crc2.fillRect(140, 200, 150, 120);
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.fillStyle = "#F8FCFE";
        Aufgabe6.crc2.fillRect(170, 230, 100, 70);
        // Sonne
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(690, 70, 45, 0, 2 * Math.PI); // x, y, size
        Aufgabe6.crc2.fillStyle = "#ffff99";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(690, 70, 30, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffb3";
        Aufgabe6.crc2.fill();
        // Baumfunktionen
        drawBaum1(800, 800, "#cc9966", "#44d271");
        drawBaum2(800, 800, "#4c2e0a", "#00514c");
        // B�ume zuf�llig hinstellen
        for (let i = 0; i < 20; i++) {
            let randomX = (Math.random() * (800 - 1)) + 1;
            let randomY = (Math.random() * (500 - 400)) + 400;
            let randomBaum1 = Math.floor((Math.random() * 2)) + 1;
            console.log("X is " + randomX, "Y is " + randomY, randomBaum1);
            if (randomBaum1 == 1) {
                drawBaum1(randomX, randomY, "#cc9966", "#44d271");
            }
            else {
                drawBaum2(randomX, randomY, "#4c2e0a", "#00514c");
            }
        }
        //Hintergrund speichern
        image = Aufgabe6.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    } //Ende der Init-Funktion
    // Baum 1
    function drawBaum1(_x, _y, _trunkColor, _topColor) {
        // Stamm
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(_x, _y);
        Aufgabe6.crc2.lineTo(_x + 25, _y + 565);
        Aufgabe6.crc2.lineTo(_x - 25, _y + 565);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.fillStyle = _trunkColor;
        Aufgabe6.crc2.fillRect(_x - 5, _y + 40, 12, 23);
        // Baumkrone
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(_x + 25, _y + 40);
        Aufgabe6.crc2.lineTo(_x - 25, _y + 40);
        Aufgabe6.crc2.lineTo(_x, _y);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.fillStyle = _topColor;
        Aufgabe6.crc2.fill();
    }
    // Baum 2
    function drawBaum2(_x, _y, _trunkColor, _topColor) {
        // Stamm
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(_x, _y);
        Aufgabe6.crc2.lineTo(_x + 30, _y - 135);
        Aufgabe6.crc2.lineTo(_x - 30, _y - 135);
        Aufgabe6.crc2.fillStyle = _trunkColor;
        Aufgabe6.crc2.fillRect(_x - 7, _y + 70, 12, 23);
        Aufgabe6.crc2.closePath();
        // Baumkrone
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(_x, _y);
        Aufgabe6.crc2.lineTo(_x + 20, _y + 70);
        Aufgabe6.crc2.lineTo(_x - 20, _y + 70);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.fillStyle = _topColor;
        Aufgabe6.crc2.fill();
    }
    // Animation
    function animate() {
        console.log("Timeout");
        // Zur�cksetzen und neu erstellen
        Aufgabe6.crc2.clearRect(0, 0, 800, 600);
        Aufgabe6.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < object.length; i++) {
            let s = object[i];
            s.update();
        }
        // Geschwindigkeit
        window.setTimeout(animate, 20);
    }
})(Aufgabe6 || (Aufgabe6 = {})); // Namespace
//# sourceMappingURL=start.js.map