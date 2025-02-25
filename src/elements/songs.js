export function displaySongsTitle(arraySongs){
    const songSection = document.querySelector(".list");
    songSection.innerHTML = "";
  
    arraySongs.forEach((song) => {
      const songTitle = document.createElement("song-list");
      songTitle.setAttribute("title", song.title);
      songTitle.setAttribute("audio_url", song.audio_url);
      songTitle.setAttribute("favorite", false)
  
      songSection.appendChild(songTitle);
    });
}