import Noise from './perlin'

let canvas,
  ctx,
  star_canvas,
  star_ctx,
  shooting_star_canvas,
  shooting_star_ctx,
  mountain_canvas,
  mountain_ctx,
  mountain_pos,
  width,
  height,
  noise,
  noise_seed
  
const max_stars = 1500
let stars = []
let shooting_stars = []
let vert_step = 6
let hor_step = 16
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var star = function () {
  this.radius = random(1,2);
  this.x = random(0, width)
  this.y = random(0, height)
  this.alpha = random(2, 10) / 10;
  stars.push(this)
}

star.prototype.draw = function () {
  var twinkle = random(0, 40)
  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05
  }
  else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05
  }
  ctx.globalAlpha = this.alpha
  ctx.drawImage(star_canvas, this.x, this.y, this.radius, this.radius);
}

var shooting_star = function () {
  this.radius = random(100,200)

  this.x = width+100
  this.y = random(0, height / 5)-100

  this.alpha = random(2, 10) / 10;
  this.speed = random(10,25)/10
  shooting_stars.push(this)
}

shooting_star.prototype.draw = function () {
  if(this.x<0){
    for(var i =0;i<shooting_stars.length;i++){
      if(shooting_stars[i]===this){
        shooting_stars.splice(i, 1)
      }
    }
  }
  this.y+=vert_step*this.speed
  this.x-=hor_step*this.speed

  ctx.drawImage(shooting_star_canvas,this.x, this.y);
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = 'transparent';

  for (let i = 0;i<stars.length; i++) {
    stars[i].draw();
  }
  ctx.globalAlpha = 1
  for (let i = 0; i<shooting_stars.length; i++) {
    shooting_stars[i].draw();
  }

  ctx.globalAlpha = 1
  ctx.drawImage(mountain_canvas, 0, mountain_pos);
  requestAnimationFrame(animate);
}

function init_star_shape() {
  // START CANVAS CACHED GRADIENT
  star_canvas = document.createElement('canvas');
  var w2 = star_canvas.width = 100;
  var h2 = star_canvas.height = 100;
  star_ctx = star_canvas.getContext("2d");
  // draw a big beefy gradient in the center of the dummy canvas
  var gradientCache = star_ctx.createRadialGradient(
    w2 / 2,
    h2 / 2,
    0,
    w2 / 2,
    h2 / 2,
    w2 / 2
  );
  gradientCache.addColorStop(0.025, 'rgba(255, 232, 222, 1)');
  gradientCache.addColorStop(0.1, 'rgba(255, 232, 222, 1)');
  star_ctx.fillStyle = gradientCache;
  star_ctx.beginPath();
  star_ctx.arc(w2 / 2, h2 / 2, w2 / 2, 0, Math.PI * 2);
  star_ctx.fill();
}

function init_stars() {
  init_star_shape()
  for (var i = 0; i < max_stars; i++) {
    new star()
  }
}
function init_mountains() {
  mountain_pos = height - height / 4
  mountain_canvas = document.createElement('canvas');
  var w2 = mountain_canvas.width = width;
  var h2 = mountain_canvas.height = height / 4;

  mountain_ctx = mountain_canvas.getContext("2d")
  mountain_ctx.beginPath()
  var x = 0
  var y = h2
  var step = width / 500

  noise = new Noise()
  noise.seed(noise_seed)
  var n_1 = 0
  var n_2 = 0
  
  mountain_ctx.moveTo(x, y)
  while (x < w2 + step) {
    var n = noise.perlin2(n_1 / 100, n_1 / 100) * h2 / 2 + h2 / 2
    var n2 = noise.perlin2(n_2 / 100, n_2 / 100) * h2 / 12
    mountain_ctx.lineTo(x, n+n2);
    x += step
    n_1++
    n_2+=5
  }
  mountain_ctx.lineTo(x, height)
  mountain_ctx.closePath()
  mountain_ctx.fillStyle = 'rgba(189, 153, 153,1)'
  mountain_ctx.fill();
}

function init_shooting_star_shape(){
  shooting_star_canvas = document.createElement('canvas');
  var w2 = shooting_star_canvas.width = 500;
  var h2 = shooting_star_canvas.height = 100;
  shooting_star_ctx = shooting_star_canvas.getContext("2d");
  shooting_star_ctx.fillStyle = 'rgba(189, 153, 153,1)'

  shooting_star_ctx.rotate(Math.atan(hor_step/vert_step));
  shooting_star_ctx.fillRect(100, -250, random(10,20)/10, 400);
}

function init_shooting_stars() {
  init_shooting_star_shape()
  shooting_stars.push(new shooting_star());
  shooting_star_cluster()
  setTimeout(function(){shooting_star_cluster()}, 5500)
}

function shooting_star_cluster(){
  var count = random(3,4)
  for (var i = 0; i < count; i++) {
    setTimeout(function(){ shooting_stars.push(new shooting_star()); }, random(300,5000));
  }
}

export function init(canvasID) {
  console.log("sup peeps")
  canvas = document.querySelector("#" + canvasID);
  width = canvas.parentNode.offsetWidth;
  height = canvas.parentNode.offsetHeight;
  canvas.width = width;
  canvas.height = height;

  ctx = canvas.getContext("2d");
  if (ctx === null) {
    alert("Unable to initialize 2D context.");
    return;
  }
  noise_seed = Math.random()
  init_mountains()
  init_stars()
  init_shooting_stars()
  animate()
}

function handle_resize() {
  width = canvas.parentNode.offsetWidth;
  height = canvas.parentNode.offsetHeight;
  canvas.width = width;
  canvas.height = height;
  init_mountains()
}

window.onresize = handle_resize;