// Autor: Artur ja Kustav

let audio = new Audio("jazz.mp3");

// Pane muusika mängima või vait
function toggleMusic() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
