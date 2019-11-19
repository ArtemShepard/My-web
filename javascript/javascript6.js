// рандомное создание либо круга либо квадрата
// рандомный цвет
// рандомный размер
// рандомное расположение
var randomfigure;
var randomcolor;
var width;
var location 



if(Math.floor(Math.random()*2) == 1){
	randomfigure = "cube";
}
else{
	randomfigure = "circle";
}
console.log(randomfigure);
document.getElementById(randomfigure).style.display = "block";

document.getElementById(randomfigure).style.backgroundColor = "#"+Math.floor(Math.random()*999999);