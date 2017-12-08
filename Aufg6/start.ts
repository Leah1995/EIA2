namespace Aufgabe6 {
    export let crc2: CanvasRenderingContext2D;

    let object: MovingObject[] = [];

    let image: ImageData;

    window.addEventListener("load", init);

    // Initialisierung
    function init(): void {
        
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        console.log("setTimeout");


        //Schleife Skifahrer
        for (let i: number = 0; i < 4; i++) {
            let s: Skifahrer = new Skifahrer(Math.random() * canvas.width + 50, -60); // Startpunkt
            object.push(s);
            // Skifahrer tauchen wieder auf
            if (this.x > 800) {
                this.x = 0;
                this.y = 10;
            }
        }

        //Schleife Schneeflocken       
        for (let i: number = 0; i < 80; i++) {
            let s: Schnee = new Schnee(0 + Math.random() * canvas.width, 0 + Math.random() * 450);
            object.push(s);
        }

        // Sky
        crc2.fillStyle = "#ccf5ff";
        crc2.fillRect(0, 0, 800, 370);

        // Schneelandschaft
        crc2.fillStyle = "#f2f2f2";
        crc2.fillRect(0, 370, 800, 20);

        // Berg 1
        crc2.beginPath();
        crc2.fillStyle = "#ffffff";
        crc2.moveTo(150, 370); // x-Anfang, y-Anfang
        crc2.lineTo(450, 370);
        crc2.lineTo(370, 300);
        crc2.fill();

        // Berg 2
        crc2.beginPath();
        crc2.fillStyle = "#c2d6d6";
        crc2.moveTo(-50, 370); // x-Anfang, y-Anfang
        crc2.lineTo(320, 370);
        crc2.lineTo(230, 270);
        crc2.closePath();
        crc2.fill();

        // Berg 3
        crc2.beginPath();
        crc2.fillStyle = "#e6e6e6";
        crc2.moveTo(400, 370); // x-Anfang, y-Anfang
        crc2.lineTo(670, 370);
        crc2.lineTo(510, 270);
        crc2.fill();

        // Berg 4
        crc2.beginPath();
        crc2.fillStyle = "#d9d9d9";
        crc2.moveTo(370, 370); // x-Anfang, y-Anfang
        crc2.lineTo(700, 250);
        crc2.lineTo(850, 370);
        crc2.fill();

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

        // Baumfunktionen
        drawBaum1(800, 800, "#cc9966", "#44d271");
        drawBaum2(800, 800, "#4c2e0a", "#00514c");

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

        //Hintergrund speichern
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);

        animate();

    }//Ende der Init-Funktion


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

    // Animation
    function animate(): void {
        console.log("Timeout");

        // Zurücksetzen und neu erstellen
        crc2.clearRect(0, 0, 800, 600);       
        crc2.putImageData(image, 0, 0);


        for (let i: number = 0; i < object.length; i++) {
            let s: MovingObject = object[i];
            s.update();
        }


        // Geschwindigkeit
        window.setTimeout(animate, 20);
    }

} // Namespace