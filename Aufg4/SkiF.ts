//namespace Classes {
//
//    export class SkiFD {
//        skiX: number;
//        skiY: number;
//        skidX: number;
//        skidY: number;
//        color: string;
//
//        constructor(_x: number, _y: number) {
//            console.log("SkiFD");
//            this.skiX = _x;
//            this.skiY = _y;
//        }
//
//        draw(): void {
//
//            function drawSki(_ski: SkiFD): void {
//                _ski.skiX += _ski.skidX;
//                _ski.skiY += _ski.skidY;
//
//                crc2.fillStyle = _ski.color;
//
//                // Skifahrer tauchen wieder auf
//                if (_ski.skiX > 800) {
//                    _ski.skiX = 0;
//                    _ski.skiY = 10;
//
//                }
//                // Körper
//                crc2.beginPath();
//                crc2.arc(_ski.skiX + _ski.skiY + 12, 445, 5, 3, 2 * Math.PI);
//                crc2.fill();
//                crc2.fillRect(_ski.skiX + _ski.skiY + 7, 445, 10, 31);
//                crc2.closePath();
//                crc2.beginPath();
//                crc2.moveTo(_ski.skiX + _ski.skiY + 10, 450);
//                crc2.lineTo(_ski.skiX + _ski.skiY + 27, 455);
//                crc2.lineWidth = 5;
//                crc2.stroke();
//                crc2.closePath();
//                // Kopf
//                crc2.beginPath();
//                crc2.arc(_ski.skiX + _ski.skiY + 12, 435, 5.5, 0, 2 * Math.PI);
//                crc2.fillStyle = "#fff7b5";
//                crc2.fill();
//                crc2.closePath();
//                // Skier
//                crc2.fillStyle = "#121219";
//                crc2.fillRect(_ski.skiX + _ski.skiY + 5, 476, 40, 4);
//                crc2.moveTo(_ski.skiX + _ski.skiY + 25, 445);
//                crc2.lineTo(_ski.skiX + _ski.skiY + 10, 485);
//                crc2.strokeStyle = "#121219";
//                crc2.lineWidth = 2;
//                crc2.stroke();
//                crc2.closePath();
//                // Helm
//                crc2.beginPath();
//                crc2.arc(_ski.skiX + _ski.skiY + 10, 433, 7.5, 2, 2 * Math.PI);
//                crc2.fill();
//                crc2.closePath();
//            }
//
//            if (this.skiY > crc2.canvas.height) {
//                this.skiY = 0;
//            }
//            if (this.skiY  < 0) {
//                this.skiY  = crc2.canvas.height;
//            }
//        }
//    }
//}
////export = Classes.SkiF;
