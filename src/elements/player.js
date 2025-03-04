import formatTimestamp from "../lib/formatTimestamp";

const player = document.querySelector("#audio-player");

//Partie info chanson
const songTitle = document.querySelector("#player-infos-song-title");
const artistName = document.querySelector("#player-infos-artist-name");
const cover = document.querySelector("#player-thumbnail-image");

//Partie contrôle du player
const previousButton = document.querySelector("#player-control-previous");
const nextButton = document.querySelector("#player-control-next");
const playButton = document.querySelector("#player-control-play");

//Barre d'avancée :
const playerTimeCurrent = document.querySelector("#player-time-current");
const playerTimeDuration = document.querySelector("#player-time-duration");
const playerProgress = document.querySelector("#player-progress-bar");

// Logo

let currentSongList = [];
let currentSong = null;

export function playSong(song, arraySongs) {
  currentSong = song;

  if (arraySongs) {
    currentSongList = arraySongs;
  }

  //Mettre les infos de la chanson
  player.src = currentSong.audio_url;
  songTitle.innerHTML = currentSong.title;
  artistName.innerHTML = currentSong.artist.name;
  cover.src = currentSong.artist.image_url;
  player.removeAttribute("controls")
  //Jouer la chanson
  player.play();
}

function nextSong() {
  let newIndex = currentSongList.indexOf(currentSong) + 1;
  if (newIndex === currentSongList.length) {
    newIndex = 0;
  }
  const nextSong = currentSongList[newIndex];
  playSong(nextSong, currentSongList);
}

function previousSong() {
  let newIndex = currentSongList.indexOf(currentSong) - 1;
  if (newIndex == -1) {
    newIndex = currentSongList.length - 1;
  }

  const nextSong = currentSongList[newIndex];
  playSong(nextSong, currentSongList);
}

playButton.addEventListener("click", () => {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
});

nextButton.addEventListener("click", nextSong);
previousButton.addEventListener("click", previousSong);

//EventListener pour avoir la mise à jour du temps
player.addEventListener("timeupdate", ()=>{
  playerProgress.value = player.currentTime
  playerTimeCurrent.innerText = formatTimestamp(player.currentTime)

})

player.addEventListener("ended", ()=>{
  nextSong()
})

//EventListener pour avoir le temps total de la chanson

player.addEventListener("durationchange", ()=>{
  playerProgress.max = player.duration 
  playerTimeDuration.innerText = formatTimestamp(player.duration)
  //console.log(formatTimestamp(player.duration))
})

//EventListener quand je déplace la bulle de la barre de progression
playerProgress.addEventListener("change", (e) => {
  player.currentTime = e.currentTarget.value
  playerTimeCurrent.innerText = formatTimestamp(player.currentTime)
  //console.log(player.currentTime)
})


