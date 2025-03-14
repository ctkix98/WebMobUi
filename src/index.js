import { displayCovers } from "./elements/artist";
import { displaySongsTitle } from "./elements/songs";
import "../src/elements/artist-list";
import "../src/elements/song-list";
import { addToggle } from "../src/elements/search";
import * as apiCall from "./api";
import { getItems, removeItem } from "./elements/favoris";

//Check si online ou offline
window.addEventListener("offline", (e) => {
  document.querySelector("body").classList.add("offline");
});

window.addEventListener("online", (e) => {
  document.querySelector("body").classList.remove("offline");
});

//Appel du service worker
//navigator.serviceWorker.register('/service-worker.js')

//Appeler pour récupérer les artistes et les covers
displayCovers(await apiCall.getArtits());

//Barre de recherche
addToggle();

const idArtist = document.querySelectorAll("artist-cover");
const nameArtistSelected = document.querySelector("#list-section h4");
const titles = document.querySelectorAll(".list");
nameArtistSelected.textContent = "Artiste";
//Quand aucun artiste n'est sélectionné, ne rien afficher
titles.forEach((title) => {
  title.textContent = "";
});

// Afficher les titres en fonction du click sur les covers
idArtist.forEach((id) => {
  id.addEventListener("click", async (e) => {
    const link = e.target.closest("a");
    //console.log(e.target)
    //console.log(link.getAttribute("href"));
    const nameArtist = e.target
      .closest(".artist-list-item-title")
      .textContent.trim();
    //console.log(nameArtist);
    const split = link.hash.split("-");

    nameArtistSelected.innerHTML = `Artiste > ${nameArtist}`;
    displaySongsTitle(await apiCall.getSongs(split[1]));
  });
});

//Player
const playerAudio = document.querySelector("#audio-player");
console.log(playerAudio);

//BARRE DE NAVIGATION
//Permet de rajouter le hash #home si la window n'a pas de hash de base
function getHash() {
  let hash = window.location.hash;
  if (!hash) {
    history.replaceState("", "", "#home");
  }
  const hashSplited = hash.split("-");
  return hashSplited;
}

//Enelver toutes les sections actives
function removeActiv() {
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });
}

//pour afficher l'accueil la première fois
removeActiv();
const homePage = document.querySelector("#home-section");
homePage.classList.add("active");
getHash();

//Récupérer les hash
window.addEventListener("hashchange", async () => {
  const hash = window.location.hash;
  //console.log(hash);
  const hasSplit = hash.split("-");
  //console.log(hasSplit);

  const activeSection = document.querySelector(`${hash}-section`); //récupérer le hash
  //Rediriger en fonction du has
  switch (hasSplit[0]) {
    case "#home":
      removeActiv();
      activeSection.classList.add("active");
      window.location.hash = hash;
      break;

    case "#player":
      removeActiv();
      activeSection.classList.add("active");
      window.location.hash = hash;
      break;

    case "#artists":
      removeActiv();
      activeSection.classList.add("active");
      break;

    case "#artist":
      removeActiv();
      const listSection = document.querySelector("#list-section");
      listSection.classList.add("active");
      displaySongsTitle(await apiCall.getSongs(hasSplit[1]));
      break;

    case "#favorites":
      removeActiv();
      const favoritesSongs = getItems();
      const favoritesSection = document.querySelector("#list-section");
      favoritesSection.classList.add("active");
      nameArtistSelected.innerHTML = `Favoris`;
      displaySongsTitle(favoritesSongs);

      //checker si on clique sur le coeur, on retire la chanson des favoris
      const songTitle = document.querySelectorAll("song-list");
      songTitle.forEach((song) => {
        song.addEventListener("favorite", (e) => {
          e.target.remove();
        });
      });

      break;

    case "#search":
      //console.log("je suis dans search")
      const searchList = await apiCall.search(hasSplit[1]);
      removeActiv();
      const searchSection = document.querySelector("#list-section");
      searchSection.classList.add("active");
      nameArtistSelected.innerHTML = `Elements relatifs à ta recherche : ${hasSplit[1]}`;
      displaySongsTitle(searchList);
      console.log(searchList);
      break;
  }
});
