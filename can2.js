var c = document.getElementById("myCan");
var ctx = c.getContext("2d");

var x= 500;
var dx=2;
var y =200;
var dy=2;
var radius=50;
function animate()
{

requestAnimationFrame(animate);
ctx.clearRect(0,0,myCan.width,myCan.height);
ctx.beginPath();
ctx.arc(x,y,radius,0,Math.PI*2,false);
//ctx.fillStyle = 'blue';
//ctx.fill();
ctx.strokeStyle="red";
ctx.stroke();

if(x+radius>myCan.width||x-radius<0)
{
dx=-dx;
}
if(y+radius>myCan.height||y-radius<0)
{
	dy=-dy;
}

x+=dx;
y+=dy;

}
animate();