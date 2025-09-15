function updateClock() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const timeToday = `${formattedHours}:${minutes}:${seconds}:   ${meridiem}`;
  $(".time").text(timeToday);
}

updateClock();
setInterval(updateClock, 1000);

const audio = new Audio("./assets/audio/1am-study-session.mp3");

$("#play-audio").on("click", function () {
  audio.load();
  audio.play().catch((err) => {
    console.error("Playback failed:", err);
  });
});
