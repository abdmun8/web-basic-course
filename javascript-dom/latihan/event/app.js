function gantiBackground(o) {
  o.style.backgroundColor = "red";
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var orang = document.querySelector(".orang");
orang.addEventListener("click", function () {
  alert("aduh saya di klik");
});

orang.addEventListener("mouseover", function () {
  gantiBackground(this);
});

var button = document.querySelector("button");
button.addEventListener("click", function () {
  var color = getRandomColor();
  orang.style.backgroundColor = color;
});
