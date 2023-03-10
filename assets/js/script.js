const menuOpen = document.querySelector(".open");
const menuClose = document.querySelector(".close");

function openMenu() {
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
}

function closeMenu() {
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
}

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
