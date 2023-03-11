const btnMobile = document.querySelector(".open");
const closeMenu = document.querySelector(".close");

function togleMenu() {
  const nav = document.querySelector(".menu");
  nav.classList.toggle("active");
  if ((btnMobile.style.display = "none")) {
    closeMenu.style.display = "block";
  }
}

function closeMobile() {
  const nav = document.querySelector(".menu");
  nav.classList.toggle("active");
  if ((closeMenu.style.display = "none")) {
    btnMobile.style.display = "block";
  }
}

btnMobile.addEventListener("click", togleMenu);
closeMenu.addEventListener("click", closeMobile);
