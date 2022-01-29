var x = document.getElementById("hamburger");
var changeRed = document.getElementById("roodAchtergrond");
var changeOrange = document.getElementById("orangeAchtergrond");
var changeWhite = document.getElementById("witAchtergrond");
var changeBlue = document.getElementById("blauwAchtergrond");
var body = document.body;

function menuAanUit() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function menuUit() {
  x.style.display = "none";
}

function changeColor(color) {
  document.body.style.background = color;
}

if (changeRed) {
  changeRed.addEventListener('click', function () {
    changeColor(Rood);
  })
}

if (changeOrange) {
  changeOrange.addEventListener('click', function () {
    changeColor(orange);
  })
}
if (changeWhite) {
  changeWhite.addEventListener('click', function () {
    changeColor(white);
  })
}
if (changeBlue) {
  changeBlue.addEventListener('click', function () {
    changeColor(blue);
  })
}
