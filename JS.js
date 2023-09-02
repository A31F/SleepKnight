//menu aktif
const mena = document.querySelector(".menu");
// Ketika Aktif
document.querySelector("#mn").onclick = () => {
  mena.classList.toggle("active");
};
// Klik Diluar
const mnl = document.querySelector("#mn");
document.addEventListener("click", function (e) {
  if (!mnl.contains(e.target) && !mena.contains(e.target)) {
    mena.classList.remove("active");
  }
});
// dark mode
var icon = document.getElementById("dm");
icon.onclick = function () {
  document.body.classList.toggle("darkm");
};
