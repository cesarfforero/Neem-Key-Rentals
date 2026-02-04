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
    "(prefers-reduced-motion: reduce)",
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

// =========================================================
// Scroll horizontal con snap para sección de villas y apartamentos
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const cards = document.querySelectorAll(".property-card");
  const description = document.getElementById("category-description");

  const bgVillas = document.getElementById("bg-villas");
  const bgApartments = document.getElementById("bg-apartments");

  const descriptions = {
    villas: "Villas privadas con diseño, naturaleza y servicio premium.",
    apartments: "Apartamentos exclusivos con comodidad, ubicación y estilo.",
  };

  const backgroundImages = {
    villas: bgVillas,
    apartments: bgApartments,
  };

  function setActiveCategory(category) {
    // tabs
    menuItems.forEach((btn) => {
      const isActive = btn.dataset.category === category;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    // cards (por clase, sin inline styles)
    cards.forEach((card) => {
      const isMatch = card.dataset.category === category;
      card.classList.toggle("is-active", isMatch);
    });

    // description
    description.textContent = descriptions[category] || "";

    // backgrounds
    Object.values(backgroundImages).forEach((bg) =>
      bg.classList.remove("active"),
    );
    if (backgroundImages[category])
      backgroundImages[category].classList.add("active");
  }

  menuItems.forEach((btn) => {
    btn.addEventListener("click", () =>
      setActiveCategory(btn.dataset.category),
    );
  });

  // initial
  setActiveCategory("villas");
});
