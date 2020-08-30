function gantiBackground(o) {
  o.style.backgroundColor = "red";
}

let orang = document.querySelector(".orang");
orang.addEventListener("click", function () {
  alert("aduh saya di klik");
});

orang.addEventListener("mouseover", function () {
  gantiBackground(this);
});
