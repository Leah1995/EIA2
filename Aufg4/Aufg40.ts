namespace L4_Schneelandschaft {
    window.addEventListener("load", init);
   
    export let crc2: CanvasRenderingContext2D;

    // Flockenarray
    let x: number[] = [];
    let y: number[] = [];
   
    let flockeNumber: number = 20;

    let imgData: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        // Sky
        crc2.fillStyle = "#ccf5ff";
        crc2.fillRect(0, 0, 800, 370);

        // Funktionen
        drawBerg(450, 370, "#c2d6d6", "#ffffff");
        drawBerg(300, 380, "#c2d6d6", "#f2f2f2");
        drawBerg(700, 350, "#c2d6d6", "#e6e6e6");
        drawBerg(200, 360, "#c2d6d6", "#d9d9d9");
        drawBaum1(800, 800, "#cc9966", "#44d271");
        drawBaum2(800, 800, "#4c2e0a", "#00514c");
        drawFlocke(150, 100);

        //Skilift
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(0, 170, 800, 15); // Anfang, Höhe, Länge, Dicke

        // Skisitz 1
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(570, 170, 10, 45);
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(650, 170, 10, 45);
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(540, 200, 150, 120);
        crc2.beginPath();
        crc2.fillStyle = "#F8FCFE";
        crc2.fillRect(570, 230, 100, 70);

        // Skisitz
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(170, 170, 10, 45);
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(250, 170, 10, 45);
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(140, 200, 150, 120);
        crc2.beginPath();
        crc2.fillStyle = "#F8FCFE";
        crc2.fillRect(170, 230, 100, 70);
               
        // Sonne
        crc2.beginPath();
        crc2.arc(690, 70, 45, 0, 2 * Math.PI); // x, y, size
        crc2.fillStyle = "#ffff99";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(690, 70, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffb3";
        crc2.fill();

        // Wolke 1
        crc2.beginPath();
        crc2.arc(120, 70, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(150, 80, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(80, 60, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(130, 50, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(80, 75, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(110, 40, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();

        // Wolke 2
        crc2.beginPath();
        crc2.arc(520, 130, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(550, 120, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(580, 120, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(530, 130, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(590, 120, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(580, 110, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(510, 110, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(480, 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(540, 105, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(440, 90, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(450, 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(540, 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(430, 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();

        // Schneelandschaft
        crc2.fillStyle = "#white";
        crc2.fillRect(0, 400, 800, 200);
        crc2.fillStyle = "#f2f2f2";
        crc2.fillRect(0, 380, 800, 20);

        //Test Skiier


        // Bäume zufällig hinstellen
        for (let i: number = 0; i < 20; i++) {
            let randomX: number = (Math.random() * (800 - 1)) + 1;
            let randomY: number = (Math.random() * (500 - 400)) + 400;
            let randomBaum1: number = Math.floor((Math.random() * 2)) + 1;
            console.log("X is " + randomX, "Y is " + randomY, randomBaum1);
            if (randomBaum1 == 1) {
                drawBaum1(randomX, randomY, "#cc9966", "#44d271");
            } else {
                drawBaum2(randomX, randomY, "#4c2e0a", "#00514c");
            }
        }

        // Berg
        function drawBerg
            (_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x - 400, _y + 50);
            crc2.lineTo(_x, _y - 80);
            crc2.lineTo(_x + 30, _y - 70);
            crc2.lineTo(_x + 80, _y - 60);
            crc2.lineTo(_x + 150, _y + 40);
            crc2.lineTo(_x + 120, _y + 40);
            crc2.closePath();
            crc2.fill();
        }

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        animate();

        // Baum 1
        function drawBaum1
            (_x: number, _y: number, _trunkColor: string, _topColor: string): void {
            // Stamm
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 25, _y + 565);
            crc2.lineTo(_x - 25, _y + 565);
            crc2.closePath();
            crc2.fillStyle = _trunkColor;
            crc2.fillRect(_x - 5, _y + 40, 12, 23);
            // Baumkrone
            crc2.beginPath();
            crc2.moveTo(_x + 25, _y + 40);
            crc2.lineTo(_x - 25, _y + 40);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            crc2.fillStyle = _topColor;
            crc2.fill();
        }
        // Baum 2
        function drawBaum2
            (_x: number, _y: number, _trunkColor: string, _topColor: string): void {
            // Stamm
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 30, _y - 135);
            crc2.lineTo(_x - 30, _y - 135);
            crc2.fillStyle = _trunkColor;
            crc2.fillRect(_x - 7, _y + 70, 12, 23);
            crc2.closePath();
            // Baumkrone
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 20, _y + 70);
            crc2.lineTo(_x - 20, _y + 70);
            crc2.closePath();
            crc2.fillStyle = _topColor;
            crc2.fill();
        }
    }

    function animate(): void {
        console.log("Animate called");
        crc2.putImageData(imgData, 0, 0);

        window.setTimeout(animate, 10); // Geschwindigkeit

        for (let i: number = 0; i < flockeNumber; i++) {
            x[i] = 0 + Math.random() * 800;
            y[i] = 0 + Math.random() * 400;
            drawFlocke(x[i], y[i]);
        }
    }
    // Schneeflocken
    function drawFlocke(_x: number, _y: number): void {
        // gerade Linie
        crc2.beginPath();
        crc2.moveTo(_x, _y - 15);
        crc2.lineTo(_x, _y + 10);
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();

        // schiefe Linien
        crc2.beginPath();
        crc2.moveTo(_x - 12, _y + 5);
        crc2.lineTo(_x + 12, _y - 10);
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(_x + 12, _y + 5);
        crc2.lineTo(_x - 12, _y - 10);
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.stroke();

        crc2.closePath();
    }
}