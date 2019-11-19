// рандомное создание либо круга либо квадрата
// рандомный цвет
// рандомный размер
// рандомное расположение
var randomfigure;
var width;
var min;



if(Math.floor(Math.random()*2) == 1){
	randomfigure = "cube";
}
else{
	randomfigure = "circle";
}
document.getElementById(randomfigure).style.display = "block";

document.getElementById(randomfigure).style.backgroundColor = "#"+Math.floor(Math.random()*999999);
	widthGf = Math.floor(Math.random()*250);
document.getElementById(randomfigure).style.height = widthGf + "px";
document.getElementById(randomfigure).style.width = widthGf +"px";
document.getElementById(randomfigure).style.top = Math.floor(Math.random()*window.screen.height) +"px";
document.getElementById(randomfigure).style.left = Math.floor(Math.random()*window.screen.width) +"px";

while(document.getElementById(randomfigure).style.top < widthGf/2 || document.getElementById(randomfigure).style.top > window.screen.height-widthGf){
	document.getElementById(randomfigure).style.top = Math.floor(Math.random()*window.screen.height) +"px";
}
while(document.getElementById(randomfigure).style.left < widthGf/2 || document.getElementById(randomfigure).style.left > window.screen.width-widthGf){
	document.getElementById(randomfigure).style.left = Math.floor(Math.random()*window.screen.width) +"px";
}
	

