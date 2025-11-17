
// Zeiger auswählen
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

// Optional: Uhrzeit für Zürich anzeigen
const useZurich = false;

// Hilfsfunktion: aktuelle Zeit holen (optional Zürich)
const getCurrentTime = () =>
  useZurich
    ? new Date(new Date().toLocaleString("de-CH", { timeZone: "Europe/Zurich" }))
    : new Date();

// Uhr aktualisieren
function updateClock() {
  const now = getCurrentTime();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const offset = -90; // CSS Ausgangsrotation Korrektur

  // Berechne Winkel
  const secondsDeg = seconds * 6 + offset;
  const minutesDeg = minutes * 6 + seconds * 0.1 + offset;
  const hoursDeg = (hours % 12) * 30 + minutes * 0.5 + offset;

  // Zeiger drehen
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// Start & Intervall
updateClock();
setInterval(updateClock, 1000);
