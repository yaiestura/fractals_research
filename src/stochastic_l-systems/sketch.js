
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
ctx.strokeStyle = 'rgb(55, 29, 4)';
var linelength = 80;
var linewidth = linelength/6;

var tree = new LSystem({
    productions: {
        'X': { successors: [
            { weight: 0.7, successor: 'FFF-[[X]+X]+F[+FX]-X' },
            { weight: 0.3, successor: 'FF-[X+]+FF[-FX]-XF' }
        ]},
        'F': { successors: [
            { weight: 0.8, successor:  'F' },
            { weight: 0.17, successor: 'FF' },
            { weight: 0.03, successor: 'FF+' }
        ]}
    },
    finals: {
        'F': () => {
        ctx.lineWidth += (Math.random() - 0.5) / 100;
ctx.beginPath()
ctx.moveTo(0, 0)
ctx.lineTo(0, linelength / (tree.iterations + 1))
ctx.stroke()
ctx.translate(0, (linelength / (tree.iterations + 1)) - 1.5)
},
'+': () => { ctx.rotate((Math.PI / 180) * 22.5) },
'-': () => { ctx.rotate((Math.PI / 180) * -22.5) },
'[': () => {
    ctx.save();
    ctx.lineWidth*=0.65;
    ctx.globalAlpha *= Math.random() * (1.0 - 0.7) + 0.7;
    linelength -= 10;
},
']': () => {
    ctx.restore();
    ctx.lineWidth*=0.9;
    linelength += 10;
}
}
})

function draw() {
    tree.setAxiom('X');
    tree.iterate(6);
    document.getElementById('textresult').innerHTML =  tree.getString();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width / 2, canvas.height / 1.4);
    ctx.rotate(Math.PI);
    ctx.lineWidth = linewidth;
    tree.final();
}

draw();
window.setInterval(() => {window.requestAnimationFrame(draw)}, 1500);