const menuBtn = document.querySelector(".menu-btn");
const hLinks = document.getElementById("hLinks");
const menuAnchor1 = document.getElementById("menu-anchor1");
const menuAnchor2 = document.getElementById("menu-anchor2");
const menuAnchor3 = document.getElementById("menu-anchor3");
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

menuAnchor1.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  hLinks.classList.remove("open");
  menuOpen = false;
});
menuAnchor2.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  hLinks.classList.remove("open");
  menuOpen = false;
});
menuAnchor3.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  hLinks.classList.remove("open");
  menuOpen = false;
});
// body.addEventListener("click", (event) => {
//   if (event.target !== menuAnchor[0] || event.target !== menuAnchor[1]) {
//     return;
//   } else {
//     menuBtn.classList.remove("open");
//     hLinks.classList.remove("open");
//     menuOpen = false;
//   }
// });

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
