let count = 1;
document.getElementById("radio1").checked = true;

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio1" + count).checked = true;
}

setInterval(function () {
  nextImage();
}, 5000);
