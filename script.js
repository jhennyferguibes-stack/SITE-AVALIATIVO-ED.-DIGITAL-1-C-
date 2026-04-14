/* =====================
   📊 DADOS DINÂMICOS
===================== */
const cardsData = [
  { title: "Irrigação inteligente", text: "Uso eficiente da água." },
  { title: "Energia solar", text: "Fonte limpa no campo." },
  { title: "Rotação de culturas", text: "Preserva o solo." }
];

const galleryData = [
  { img: "https://picsum.photos/300?1", text: "Plantação sustentável" },
  { img: "https://picsum.photos/300?2", text: "Tecnologia no campo" },
  { img: "https://picsum.photos/300?3", text: "Colheita moderna" }
];

/* =====================
   🧩 RENDERIZAÇÃO
===================== */
const container = document.getElementById("cards-container");

cardsData.forEach(card => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<h3>${card.title}</h3><p>${card.text}</p>`;
  container.appendChild(div);
});

/* =====================
   🎠 CARROSSEL
===================== */
let index = 0;

function updateCarousel() {
  document.getElementById("carousel-img").src = galleryData[index].img;
  document.getElementById("carousel-text").textContent = galleryData[index].text;
}

function changeSlide(direction) {
  index = (index + direction + galleryData.length) % galleryData.length;
  updateCarousel();
}

updateCarousel();

/* =====================
   📂 MENU MOBILE
===================== */
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

/* =====================
   ♿ ACESSIBILIDADE
===================== */
let fontSize = 16;

function increaseFont() {
  fontSize += 2;
  document.documentElement.style.fontSize = fontSize + "px";
}

function decreaseFont() {
  fontSize -= 2;
  document.documentElement.style.fontSize = fontSize + "px";
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

/* =====================
   🎯 ACCORDION
===================== */
document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.classList.toggle("show");
  });
});

/* =====================
   ✨ SCROLL REVEAL
===================== */
function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
