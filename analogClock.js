// Select the clock hands
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

// Optional: show time for Zurich timezone
const useZurich = false;

// Helper function: get current time (optional Zurich)
const getCurrentTime = () =>
  useZurich
    ? new Date(new Date().toLocaleString("de-CH", { timeZone: "Europe/Zurich" }))
    : new Date();

// Update the clock
function updateClock() {
  const now = getCurrentTime();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const offset = -90; // CSS base rotation offset

  // Calculate angles
  const secondsDeg = seconds * 6 + offset;
  const minutesDeg = minutes * 6 + seconds * 0.1 + offset;
  const hoursDeg = (hours % 12) * 30 + minutes * 0.5 + offset;

  // Rotate the hands
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// Initial update & set interval
updateClock();
setInterval(updateClock, 1000);
