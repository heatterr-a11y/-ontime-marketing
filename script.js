/* =========================================================
   OnTime Marketing — Script (Deck + Captions + Metrics)
========================================================= */
console.log("OnTime Marketing — system synchronized.");

/* =======================
   DOM REFS
======================= */
const root = document.documentElement;
const range = document.getElementById("timeRange");
const delayInput = document.getElementById("delayInput");
const scoreValue = document.getElementById("scoreValue");
const themeToggle = document.getElementById("themeToggle");
const timelinePath = document.getElementById("timelinePath");
const exportDeckBtn = document.getElementById("exportDeck");
const investorToggle = document.getElementById("investorToggle");
const deckTemplate = document.getElementById("deckTemplate");

const nodes = {
  intent: document.getElementById("intent"),
  decision: document.getElementById("decision"),
  outcome: document.getElementById("outcome"),
};

/* =======================
   THEME TOGGLE
======================= */
const savedTheme = localStorage.getItem("theme");
const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

root.dataset.theme = savedTheme || (systemPrefersLight ? "light" : "dark");
themeToggle.setAttribute("aria-pressed", root.dataset.theme === "light");

themeToggle.addEventListener("click", () => {
  const newTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
  themeToggle.setAttribute("aria-pressed", newTheme === "light");
});

/* =======================
   TEMPORAL ENGINE
======================= */
if (range) {
  range.addEventListener("input", () => {
    const value = Number(range.value);
    range.setAttribute("aria-valuenow", value);

    nodes.intent.style.opacity = value > 10 ? 1 : 0.3;
    nodes.decision.style.opacity = value > 40 ? 1 : 0.3;
    nodes.outcome.style.opacity = value > 70 ? 1 : 0.3;

    nodes.intent.style.transform = value > 10 ? "scale(1.05)" : "scale(1)";
    nodes.decision.style.transform = value > 40 ? "scale(1.05)" : "scale(1)";
    nodes.outcome.style.transform = value > 70 ? "scale(1.05)" : "scale(1)";

    if (timelinePath) {
      const curve = 60 - value / 5;
      timelinePath.setAttribute("d", `M20 60 Q300 ${curve} 580 60`);
    }
  });
}

/* =======================
   LATENCY SCORE
======================= */
function updateScore() {
  const delay = Number(delayInput.value || 0);
  const score = Math.max(0, 100 - delay / 5);
  scoreValue.textContent = `${score.toFixed(1)}% efficiency retained`;
}
delayInput?.addEventListener("input", updateScore);
updateScore();

/* =======================
   DECK SYSTEM
======================= */
let deckWindow = null;
let slides = [];
let currentSlide = 0;

function openDeck() {
  deckWindow = window.open("", "_blank", "noopener");
  deckWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>OnTime Pitch Deck</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body class="deck-mode">
      <div class="slide-progress" aria-live="polite" aria-atomic="true">
        Slide <span id="currentSlide">1</span> / <span id="totalSlides">—</span>
      </div>
      <div class="narration-caption"></div>
    </body>
    </html>
  `);

  const clone = deckTemplate.content.cloneNode(true);
  deckWindow.document.body.appendChild(clone);
  deckWindow.document.close();

  initDeckControls(deckWindow);
  syncLatencyToDeck(deckWindow);
  addTimestamp(deckWindow);
}

function initDeckControls(win) {
  slides = Array.from(win.document.querySelectorAll(".slide"));
  currentSlide = 0;

  const progressEl = win.document.querySelector("#currentSlide");
  const totalEl = win.document.querySelector("#totalSlides");
  if (totalEl) totalEl.textContent = slides.length;

  slides.forEach((slide, i) => {
    slide.setAttribute("aria-hidden", i !== 0);
    slide.classList.toggle("active", i === 0);
    slide.tabIndex = -1;
  });

  slides[0]?.focus();
  narrateSlide(win);
  updateProgress(win);

  win.document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
      case "PageDown":
        nextSlide(win);
        break;
      case "ArrowLeft":
      case "PageUp":
        prevSlide(win);
        break;
      case "Home":
        goToSlide(win, 0);
        break;
      case "End":
        goToSlide(win, slides.length - 1);
        break;
      case "Escape":
        win.close();
        break;
    }
  });
}

function goToSlide(win, index) {
  slides.forEach((slide, i) => {
    const active = i === index;
    slide.setAttribute("aria-hidden", !active);
    slide.classList.toggle("active", active);
    if (active) slide.focus();
  });
  currentSlide = index;
  narrateSlide(win);
  updateProgress(win);
}

const nextSlide = (win) =>
  currentSlide < slides.length - 1 && goToSlide(win, currentSlide + 1);
const prevSlide = (win) =>
  currentSlide > 0 && goToSlide(win, currentSlide - 1);

function updateProgress(win) {
  const progressEl = win.document.querySelector("#currentSlide");
  if (progressEl) progressEl.textContent = currentSlide + 1;
}

/* =======================
   NARRATION
======================= */
function narrateSlide(win) {
  if (!window.speechSynthesis) return;

  const text = slides[currentSlide]?.dataset.narration;
  const captionEl = win.document.querySelector(".narration-caption");
  if (captionEl) captionEl.textContent = text || "";

  if (!text) return;
  speechSynthesis.cancel();
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

/* =======================
   METRIC BAR (deck mode)
======================= */
function syncLatencyToDeck(win) {
  const el = win.document.getElementById("deckLatency");
  const fillEl = win.document.querySelector(".metric-fill");
  if (!el || !fillEl) return;

  function update() {
    el.textContent = scoreValue.textContent;
    const score = Number(scoreValue.textContent.replace("% efficiency retained","")) || 0;
    fillEl.style.width = score + "%";
  }
  update();
  delayInput?.addEventListener("input", update);
}

/* =======================
   TIMESTAMP
======================= */
function addTimestamp(win) {
  const el = win.document.querySelector(".timestamp");
  if (el) el.textContent = `Generated ${new Date().toLocaleString()}`;
}

/* =======================
   EXPORT / OPEN DECK
======================= */
exportDeckBtn?.addEventListener("click", openDeck);