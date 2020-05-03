const menuBtn = document.querySelector(".menu-btn");
const hLinks = document.getElementById("hLinks");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    hLinks.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    hLinks.classList.remove("open");
    menuOpen = false;
  }
});

function toggleBtn1(x) {
  var element = document.body;
  element.classList.toggle("dark-mode");
  x.classList.toggle("fa-toggle-on");
}

function toggleBtn2(x) {
  var element = document.body;
  element.classList.toggle("dark-mode");
  x.classList.toggle("fa-toggle-on");
}
