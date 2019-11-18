// рандомное создание либо круга либо квадрата
// рандомный цвет
// рандомный размер
// рандомное расположение
var randomfigure;
var randomcolor;
var width;
var location 

var x = Math.floor(Math.random()*2);
if(x >1){
	randomfigure = "cube";
}
else{
	randomfigure = "circle";
}
document.getElementById(randomfigure).style.display = "none";