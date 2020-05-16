// Made with Zdog
const PI = 3.1415926536;

Zfont.init(Zdog);

let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  resize: 'fullscreen',
  // stop spinning when drag starts
  onDragStart: function() {
    isSpinning = false;
  },
});


// square
new Zdog.Rect({
  addTo: illo,
  width: 0,
  height: 28,
  translate: { z: -10 },
  stroke: 40,
  rotate: {x: PI/4},
  color: '#fa7075',
  fill: true,
});

new Zdog.Rect({
  addTo: illo, 
  width: 0,
  height: 28,
  translate: { z: 10 },
  stroke: 40,
  rotate: {x: -PI/4},
  color: '#fa7075',
  fill: true,
});


// Create a Font object
// You can use pretty much any .ttf or .otf font!
// https://github.com/jaames/zfont#zdogfont
var font = new Zdog.Font({
  src: 'https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf'
});

// Create a Text object
// Text objects behave like any other Zdog shape!
// https://github.com/jaames/zfont#zdogtext
var text = new Zdog.Text({
  addTo: illo,
  font: font,
  value: "520!",
  fontSize: 50,
  translate: {y:50},
  rotate: {y: PI/2},
  textAlign: 'center',
  textBaseline: 'middle',
  color: '#543864',
  fill: true,
  stroke: 4,
});

// Creating a darker duplicate of the text and pushing it backwards can help make it look like the text has depth
// (This is entirely optional!)
// var shadow = text.copy({
//   addTo: illo,
//   translate: {z: -6, y:50},
//   rotate: {y: PI/2},
//   color: '#aab',
// });






function animate() {
  illo.rotate.y += isSpinning ? -0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();