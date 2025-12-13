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

// =========================================================
// Smooth scroll for "Explore more"
// =========================================================
document.addEventListener("DOMContentLoaded", function () {
  const exploreBtn = document.querySelector(".explore-more-button");
  const targetSection = document.querySelector(".feature-section");

  if (exploreBtn && targetSection) {
    exploreBtn.addEventListener("click", () => {
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// =========================================================
// Rotating Phrases Animation (cada 2s)
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("phrasesList");
  const textEl = document.getElementById("phrasesText");

  if (!list || !textEl) return;

  const phrases = Array.from(list.querySelectorAll("li"))
    .map((li) => li.textContent.trim())
    .filter(Boolean);

  if (!phrases.length) return;

  let index = 0;
  const intervalMs = 3500;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function setText(next) {
    textEl.textContent = next;
  }

  function nextPhrase() {
    index = (index + 1) % phrases.length;

    // Si el usuario prefiere menos animación, solo cambia texto
    if (reduceMotion) {
      setText(phrases[index]);
      return;
    }

    // animación suave: sale -> cambia texto -> entra
    textEl.classList.add("is-leaving");

    setTimeout(() => {
      textEl.classList.remove("is-leaving");
      textEl.classList.add("is-entering");
      setText(phrases[index]);

      requestAnimationFrame(() => {
        textEl.classList.remove("is-entering");
      });
    }, 220);
  }

  // inicial
  setText(phrases[0]);

  // ciclo
  setInterval(nextPhrase, intervalMs);
});
