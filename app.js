var button = document.getElementsByClassName("btn");
var element = document.getElementsByClassName("hey");

var color = ["green", "red", "blue", "pink","aqua","brown","aqua"] ;

button[0].addEventListener("click",changeProperty);

function changeProperty(){
    var rn = Math.floor(Math.random() * 6);
     element[0].innerHTML = "Background color : " + color[rn];
     element[0].style.backgroundColor = color[rn];
}

function changeColor(){
    element[0].style.backgroundColor = 'red';
}