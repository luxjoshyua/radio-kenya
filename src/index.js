import style from "./sass/index.scss";
import "bootstrap";
import fontawesome from "@fortawesome/fontawesome-free";
import video from "./assets/videos/logo-cutdown-compressed.mp4";

// Playbutton
const playBtn = document.querySelector(".fa-play");
const stopBtn = document.querySelector(".fa-stop");
const audio = document.getElementById("audio");

playBtn.addEventListener("click", (event) => {
  // console.log("e is registering", event);
  audio.play();
  playBtn.classList.add("inactive");
  stopBtn.classList.add("active");
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  playBtn.classList.add("active");
  playBtn.classList.remove("inactive");
  stopBtn.classList.remove("active");
});

// Sidebar
const sideBar = document.querySelector(".sidebar");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
sideBar.addEventListener("click", () => {
  sideBar.classList.toggle("isActive");
  sideBar.firstElementChild.classList.toggle("isActive");
  title.classList.toggle("isHidden");
  content.classList.toggle("isContentActive");
});

// Text loop
const text2Loop = [
  "a platform and non-profit",
  "showcasing Kenyan musicians, creatives and curatives.",
];

textSequence(0);

function textSequence(i) {
  const textAnimate = document.querySelector(".text-animate");
  if (textAnimate !== null) {
    if (text2Loop.length > i) {
      setTimeout(function () {
        textAnimate.innerHTML = text2Loop[i];
        textSequence(++i);
      }, 3000); // 1 second (in milliseconds)
    } else if (text2Loop.length == i) {
      // Loop
      textSequence(0);
    }
  }
}

// Hamburger Nav
const hamburger = document.querySelector(".hamburger");
const navContentMb = document.querySelector(".nav-links-mb");
console.log(hamburger);
hamburger.addEventListener("click", (e) => {
  console.log(e);
  navContentMb.classList.toggle("activeNavMb");
});
