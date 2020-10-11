import style from "./sass/index.scss";
import "bootstrap";
import fontawesome from "@fortawesome/fontawesome-free";
import video from "./assets/videos/radio-254-compressed.mp4";

const playBtn = document.querySelector(".fa-play");
const stopBtn = document.querySelector(".fa-stop");
const audio = document.getElementById("audio");

function play() {
  audio.play();
  playBtn.classList.add("inactive");
  stopBtn.classList.add("active");
}

playBtn.addEventListener("click", () => {
  play();
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  playBtn.classList.add("active");
  playBtn.classList.remove("inactive");
  stopBtn.classList.remove("active");
});
