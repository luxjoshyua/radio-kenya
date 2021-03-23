const apiURL = 'https://public.radio.co/stations/sba1f00abf/history';
let data = [];

fetch(apiURL)
  .then((data) => {
    return data.json();
  })
  .then((result) => {
    data = result;
    setCurrentSong(data);
  })
  .catch((error) => {
    console.log('here is API error = ', error);
  });

const setCurrentSong = (data) => {
  const songSpan = document.getElementById('song-title');
  const currentSong = (songSpan.innerHTML = data.tracks[0].title);
  const title = 'Now playing: ';
  const marqueeText = new Array(40).fill(title).join(`${currentSong} - `);
  const marquee = document.querySelector('.marquee-wrapper .intro-text');
  marquee.innerHTML = marqueeText;
};
