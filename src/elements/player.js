const player = document.querySelector("#audio-player");

//Partie info chanson
const songTitle = document.querySelector("#player-infos-song-title");
const artistName = document.querySelector("#player-infos-artist-name");
const cover = document.querySelector("#player-thumbnail-image");

//Partie contrôle du player
const previousButton = document.querySelector("#player-control-previous");
const nextButton = document.querySelector("#player-control-next");
const playButton = document.querySelector("#player-control-play");

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
  if(newIndex == -1){
    newIndex = currentSongList.length -1
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
