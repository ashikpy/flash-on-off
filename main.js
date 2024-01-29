const lolId = document.getElementById("lol");
var setBool = true;

function lol() {
  if (setBool) {
    lolId.innerText = "flash_on";
    setBool = false;
  } else {
    lolId.innerText = "flash_off";
    setBool = true;
  }
}
