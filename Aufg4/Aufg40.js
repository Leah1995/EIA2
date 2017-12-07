var L4_Schneelandschaft;
(function (L4_Schneelandschaft) {
    window.addEventListener("load", init);
    // Flockenarray
    let x = [];
    let y = [];
    let flockeNumber = 20;
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L4_Schneelandschaft.crc2 = canvas.getContext("2d");
        // Sky
        L4_Schneelandschaft.crc2.fillStyle = "#ccf5ff";
        L4_Schneelandschaft.crc2.fillRect(0, 0, 800, 370);
        // Funktionen
        drawBerg(450, 370, "#c2d6d6", "#ffffff");
        drawBerg(300, 380, "#c2d6d6", "#f2f2f2");
        drawBerg(700, 350, "#c2d6d6", "#e6e6e6");
        drawBerg(200, 360, "#c2d6d6", "#d9d9d9");
        drawBaum1(800, 800, "#cc9966", "#44d271");
        drawBaum2(800, 800, "#4c2e0a", "#00514c");
        drawFlocke(150, 100);
        //Skilift
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.fillStyle = "black";
        L4_Schneelandschaft.crc2.fillRect(0, 170, 800, 15); // Anfang, H�he, L�nge, Dicke
        // Skisitz 1
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.fillStyle = "black";
        L4_Schneelandschaft.crc2.fillRect(570, 170, 10, 45);
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.fillStyle = "black";
        L4_Schneelandschaft.crc2.fillRect(650, 170, 10, 45);
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.fillStyle = "black";
        L4_Schneelandschaft.crc2.fillRect(540, 200, 150, 120);
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.fillStyle = "#F8FCFE";
        L4_Schneelandschaft.crc2.fillRect(570, 230, 100, 70);
        // Skisitz
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.fillStyle = "black";
        L4_Schneelandschaft.crc2.fillRect(170, 170, 10, 45);
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.fillStyle = "black";
        L4_Schneelandschaft.crc2.fillRect(250, 170, 10, 45);
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.fillStyle = "black";
        L4_Schneelandschaft.crc2.fillRect(140, 200, 150, 120);
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.fillStyle = "#F8FCFE";
        L4_Schneelandschaft.crc2.fillRect(170, 230, 100, 70);
        // Sonne
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(690, 70, 45, 0, 2 * Math.PI); // x, y, size
        L4_Schneelandschaft.crc2.fillStyle = "#ffff99";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(690, 70, 30, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "#ffffb3";
        L4_Schneelandschaft.crc2.fill();
        // Wolke 1
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(120, 70, 30, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(150, 80, 30, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(80, 60, 30, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(130, 50, 30, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(80, 75, 30, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(110, 40, 30, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        // Wolke 2
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(520, 130, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(550, 120, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(580, 120, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(530, 130, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(590, 120, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(580, 110, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(510, 110, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(480, 100, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(540, 105, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(440, 90, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(450, 100, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(540, 100, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.arc(430, 100, 40, 0, 2 * Math.PI);
        L4_Schneelandschaft.crc2.fillStyle = "white";
        L4_Schneelandschaft.crc2.fill();
        // Schneelandschaft
        L4_Schneelandschaft.crc2.fillStyle = "#white";
        L4_Schneelandschaft.crc2.fillRect(0, 400, 800, 200);
        L4_Schneelandschaft.crc2.fillStyle = "#f2f2f2";
        L4_Schneelandschaft.crc2.fillRect(0, 380, 800, 20);
        //Test Skiier
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
        // Berg
        function drawBerg(_x, _y, _strokeColor, _fillColor) {
            L4_Schneelandschaft.crc2.beginPath();
            L4_Schneelandschaft.crc2.fillStyle = _fillColor;
            L4_Schneelandschaft.crc2.strokeStyle = _strokeColor;
            L4_Schneelandschaft.crc2.moveTo(_x - 400, _y + 50);
            L4_Schneelandschaft.crc2.lineTo(_x, _y - 80);
            L4_Schneelandschaft.crc2.lineTo(_x + 30, _y - 70);
            L4_Schneelandschaft.crc2.lineTo(_x + 80, _y - 60);
            L4_Schneelandschaft.crc2.lineTo(_x + 150, _y + 40);
            L4_Schneelandschaft.crc2.lineTo(_x + 120, _y + 40);
            L4_Schneelandschaft.crc2.closePath();
            L4_Schneelandschaft.crc2.fill();
        }
        imgData = L4_Schneelandschaft.crc2.getImageData(0, 0, L4_Schneelandschaft.crc2.canvas.width, L4_Schneelandschaft.crc2.canvas.height);
        animate();
        // Baum 1
        function drawBaum1(_x, _y, _trunkColor, _topColor) {
            // Stamm
            L4_Schneelandschaft.crc2.beginPath();
            L4_Schneelandschaft.crc2.moveTo(_x, _y);
            L4_Schneelandschaft.crc2.lineTo(_x + 25, _y + 565);
            L4_Schneelandschaft.crc2.lineTo(_x - 25, _y + 565);
            L4_Schneelandschaft.crc2.closePath();
            L4_Schneelandschaft.crc2.fillStyle = _trunkColor;
            L4_Schneelandschaft.crc2.fillRect(_x - 5, _y + 40, 12, 23);
            // Baumkrone
            L4_Schneelandschaft.crc2.beginPath();
            L4_Schneelandschaft.crc2.moveTo(_x + 25, _y + 40);
            L4_Schneelandschaft.crc2.lineTo(_x - 25, _y + 40);
            L4_Schneelandschaft.crc2.lineTo(_x, _y);
            L4_Schneelandschaft.crc2.closePath();
            L4_Schneelandschaft.crc2.fillStyle = _topColor;
            L4_Schneelandschaft.crc2.fill();
        }
        // Baum 2
        function drawBaum2(_x, _y, _trunkColor, _topColor) {
            // Stamm
            L4_Schneelandschaft.crc2.beginPath();
            L4_Schneelandschaft.crc2.moveTo(_x, _y);
            L4_Schneelandschaft.crc2.lineTo(_x + 30, _y - 135);
            L4_Schneelandschaft.crc2.lineTo(_x - 30, _y - 135);
            L4_Schneelandschaft.crc2.fillStyle = _trunkColor;
            L4_Schneelandschaft.crc2.fillRect(_x - 7, _y + 70, 12, 23);
            L4_Schneelandschaft.crc2.closePath();
            // Baumkrone
            L4_Schneelandschaft.crc2.beginPath();
            L4_Schneelandschaft.crc2.moveTo(_x, _y);
            L4_Schneelandschaft.crc2.lineTo(_x + 20, _y + 70);
            L4_Schneelandschaft.crc2.lineTo(_x - 20, _y + 70);
            L4_Schneelandschaft.crc2.closePath();
            L4_Schneelandschaft.crc2.fillStyle = _topColor;
            L4_Schneelandschaft.crc2.fill();
        }
    }
    function animate() {
        console.log("Animate called");
        L4_Schneelandschaft.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(animate, 10); // Geschwindigkeit
        for (let i = 0; i < flockeNumber; i++) {
            x[i] = 0 + Math.random() * 800;
            y[i] = 0 + Math.random() * 400;
            drawFlocke(x[i], y[i]);
        }
    }
    // Schneeflocken
    function drawFlocke(_x, _y) {
        // gerade Linie
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.moveTo(_x, _y - 15);
        L4_Schneelandschaft.crc2.lineTo(_x, _y + 10);
        L4_Schneelandschaft.crc2.strokeStyle = "white";
        L4_Schneelandschaft.crc2.lineWidth = 5;
        L4_Schneelandschaft.crc2.stroke();
        // schiefe Linien
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.moveTo(_x - 12, _y + 5);
        L4_Schneelandschaft.crc2.lineTo(_x + 12, _y - 10);
        L4_Schneelandschaft.crc2.strokeStyle = "white";
        L4_Schneelandschaft.crc2.lineWidth = 5;
        L4_Schneelandschaft.crc2.stroke();
        L4_Schneelandschaft.crc2.beginPath();
        L4_Schneelandschaft.crc2.moveTo(_x + 12, _y + 5);
        L4_Schneelandschaft.crc2.lineTo(_x - 12, _y - 10);
        L4_Schneelandschaft.crc2.strokeStyle = "white";
        L4_Schneelandschaft.crc2.lineWidth = 5;
        L4_Schneelandschaft.crc2.stroke();
        L4_Schneelandschaft.crc2.closePath();
    }
})(L4_Schneelandschaft || (L4_Schneelandschaft = {}));
//# sourceMappingURL=Aufg40.js.map