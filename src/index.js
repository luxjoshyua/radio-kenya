import style from "./sass/index.scss";
import "bootstrap";
import fontawesome from "@fortawesome/fontawesome-free";
import video from "./assets/videos/radio-254-compressed.mp4";

const playBtn = document.querySelector(".fa-play");
const stopBtn = document.querySelector(".fa-stop");
const audio = document.getElementById("audio");

playBtn.addEventListener("click", () => {
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

const sideBar = document.querySelector(".sidebar");
const title = document.querySelector(".title");
const closeIcon = document.querySelector(".close-icon");

sideBar.addEventListener("click", () => {
  sideBar.classList.toggle("isActive");
  sideBar.firstElementChild.classList.toggle("isActive");
  title.classList.toggle("isHidden");
});
closeIcon.addEventListener("click", (e) => {
  console.log("click here", e); 
    console.log(sideBar.classList);
    // document.querySelector(".isActive")
    // ? document.querySelector(".isActive").classList.remove("active")
    // : "";

});