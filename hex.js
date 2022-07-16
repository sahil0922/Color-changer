var button = document.getElementsByClassName("btn");
var element = document.getElementsByClassName("hey");

var color = ["#5DADE2", "#A9DFBF", "#F9E79F",,"#CCCCFF","#7E5109","#9FE2BF","#A95C68","#AAFF00","#FF5F1F","#FF69B4"] ;

button[0].addEventListener("click",changeProperty);

function changeProperty(){
    var rn = Math.floor(Math.random() * 10);
     element[0].innerHTML = "Background color : " + color[rn];
     element[0].style.backgroundColor = color[rn];
}

function changeColor(){
    element[0].style.backgroundColor = 'red';
}