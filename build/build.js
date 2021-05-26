var c;
function setup() {
    c = createCanvas(1024, 1024);
    textFont('monospace');
    textLeading(12);
}
function draw() {
    background(255);
    fill(0);
    var qr = qrcode(4, 'L');
    qr.addData('https://code.dblock.org');
    qr.make();
    text(qr.createASCII(), 1, 1);
}
//# sourceMappingURL=../sketch/sketch/build.js.map