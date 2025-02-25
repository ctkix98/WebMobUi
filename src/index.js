import { displayCovers } from "./elements/Artist";
import { displaySongsTitle } from "./elements/songs";
import "../src/elements/artist-list";
import "../src/elements/song-list";
import * as apiCall from "./api";

displayCovers(await apiCall.getArtits());

const idArtist = document.querySelectorAll("artist-cover");
const nameArtistSelected = document.querySelector("#list-section h4")

idArtist.forEach((id) => {
  id.addEventListener("click", async (e) => {
    const link = e.target.closest("a");
    //console.log(e.target)
    //console.log(link.getAttribute("href"));
    const nameArtist = e.target.closest(".artist-list-item-title").textContent.trim();
    //console.log(nameArtist);
    const split = link.hash.split("-")

    nameArtistSelected.innerHTML = `Artiste > ${nameArtist}`
    displaySongsTitle(await apiCall.getSongs(split[1]))

  });
});
