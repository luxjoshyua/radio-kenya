import style from "./sass/index.scss";
import "bootstrap";
import fontawesome from "@fortawesome/fontawesome-free";
import video from "./assets/videos/logo-cutdown-compressed.mp4";

console.log(
  "%c Built by josh, reach out at josh.e.fielding@gmail.com",
  "font-size: 30px;background:blue;text-shadow:5px 5px 0 green"
);

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
  "A platform and non-profit",
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
const hamburger = document.querySelector(".hamburger-nav");
const navDom = document.querySelector(".nav-links-mb");
// const navLinks = document.querySelectorAll(".sticky-overlay .inner a");
if (hamburger !== null) {
  hamburger.addEventListener("click", function () {
    toggleNav();
  });
}
// if (navLinks !== null) {
//   navLinks.forEach(link => {
//     link.addEventListener("click", function() {
//       toggleNav();
//     });
//   });
// }

function toggleNav() {
  hamburger.classList.toggle("active");
  navDom.classList.toggle("activeNavMb");
}

// Marquee
// here we make a function called makeMarquee
function makeMarquee() {
  const title = "Playing 100% Kenyan content 24/7";
  // then we fill it with the text from our title (50 times)
  // we then join them all together as one text string using a ' — '
  const marqueeText = new Array(80).fill(title).join(" — ");
  const marquee = document.querySelector(".marquee-wrapper span");
  // using innerHTML lets us set the content inside an element
  marquee.innerHTML = marqueeText;
}

// here we actually run our makeMarquee function
makeMarquee();
