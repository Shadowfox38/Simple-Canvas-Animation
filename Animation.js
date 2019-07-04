console.log("Jello");
var canvas = document.getElementById("Mycanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var color =
[
  "#ffaa33",
  "#99faaa",
  "#00ff00",
  "#4411aa",
  "#ff1100",
];

 // Circle Object
function Circle(x,y,radius,dx,dy)
{
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy  = dy;
  this.idx = Math.floor(Math.random()* 4);

  this.draw = function()
  {
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
    ctx.fillStyle = color[this.idx];
    ctx.fill();
  }
  this.update = function()
  {
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
    if( this.x+ this.radius > window.innerWidth || this.x - this.radius < 0)
    {
      this.dx= -this.dx;
    }
    if( this.y+ this.radius > window.innerHeight || this.y - this.radius < 0)
    {
      this.dy = -this.dy;
    }
    this.draw();
  }
}
var radius = 6;

var array = [];
for(var i=0;i<200;i++)
{
  var x = Math.random() *(window.innerWidth - radius);
  var y = Math.random() *(window.innerHeight - radius);
  if(x<radius)
    {x=radius;}
  if(y<radius)
    {y=radius;}
  var dx = (Math.random()-0.5) * 20;
  var dy = (Math.random()-0.5)* 20;
  array.push(new Circle(x,y,radius,dx,dy));
}
for(var i=0;i<array.length;i++)
{
  array[i].draw();
}
// Animation
function animate()
{
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
  console.log("Hello");
  for(var i=0; i< array.length; i++)
    {array[i].update();}

}
animate();
