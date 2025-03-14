import { playSong } from "./player";
import { setItem, getItem, getItems, removeItem } from "./favoris";

export function displaySongsTitle(arraySongs) {
  const songSection = document.querySelector(".list");
  songSection.innerHTML = "";

  arraySongs.forEach((song) => {
    const songTitle = document.createElement("song-list");
    songTitle.setAttribute("title", song.title);
    songTitle.setAttribute("audio_url", song.audio_url);
    if (getItem(song.id)) {
      songTitle.setAttribute("favorite", true);
    } else {
      songTitle.setAttribute("favorite", false);
    }

    songSection.appendChild(songTitle);

    songTitle.addEventListener("play_click", (e) => {
      //console.log("Je suis cliqué ici")
      //console.log(e.target)
      playSong(song, arraySongs);
    });

    songTitle.addEventListener("favorite", (e) => {
      if (getItem(song.id)) {
        songTitle.setAttribute("favorite", false);
        removeItem(song.id);
      } else {
        songTitle.setAttribute("favorite", true);
        setItem(song.id, song);
      }

      //console.log("Je suis dans songs.js")
      //localStorage.setItem("monChat", "Tom");
    });
  });
}
