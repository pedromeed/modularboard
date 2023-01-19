let angle = 0;
let w = 40;
let ma;
let maxD;

let frames = 200;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  ma = atan(cos(QUARTER_PI));
  maxD = dist(200, 900, 700, 700);
  //maxD = dist(0,300,200,200); //  fica interessante 
}
        
function keyPressed() {
  if (key == " ") {
    const options = {
      units: "frames",
      delay: 2
    }
    saveGif("beesandbombs.gif", frames, options);
  }
}

function draw() {
  background("#0aff99");
  
  
  ortho(-300, 300, 300, -300, 0, 1000);
  rotateX(ma);
  rotateY(-QUARTER_PI);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 50, 400));
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial(); // se eu tirar esta funçao, a imagem fica aprenas com o stroke num estilo desenho
      box(w, h, w);
      //rect(w,h,w,h,w,h);
      //sphere(h,w) // fica muito interessante e grande
      sphere(100,100)
      cone(h,h)
      //torus(h, w) // fica muito interessante e grande
      //ellipsoid(w, h, w);
      pop();
    }
  }

  angle -= TWO_PI / frames;
}