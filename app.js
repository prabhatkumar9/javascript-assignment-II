// function changeColor() {

//     let body = document.getElementsByClassName("rect")[0];
//     let canvas = document.createElement("canvas");
//     canvas.height = 800;
//     canvas.width = 800;
//     let context = canvas.getContext("2d");

//     let color = "red";
//     context.fillStyle = color;

//     //Each rectangle's size is (100*100)
//     context.fillRect(Math.random() * 500, Math.random() * 500, 100, 100);
//     // body.appendChild(canvas);
//     body.replaceWith(canvas);

// }
// window.onload = changeColor;

function createDiv() {
  let newdiv = document.querySelector(".rect");
  let div = document.createElement("div");
  div.className = "box";
  if (newdiv.hasChildNodes) {
    // newdiv.removeChild(div);
  }
  newdiv.appendChild(div);
}

let box = document.querySelector(".box");
box.addEventListener(onmouseover, "RandomColor");

function RandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var newColor = getRandomColor();

var names = ["Diego", "Gabriel", "Lucas"];

let li = document.querySelector(".list");
let temp = "";
for (let i = 0; i < name.length; ++i) {
  temp += "<li>" + name[i] + "</li>";
}
li.appendChild(temp);
