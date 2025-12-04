// =========================================================
// Mobile Navigation Toggle - Vanilla JS
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (!menuToggle || !mainNav) return;

  // Toggle del panel de navegación en móvil
  menuToggle.addEventListener("click", function () {
    const isOpen = document.body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Al redimensionar a desktop, aseguramos que el menú quede cerrado
  window.addEventListener("resize", function () {
    if (
      window.innerWidth >= 992 &&
      document.body.classList.contains("nav-open")
    ) {
      document.body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});
