import { displayCovers } from "./elements/Artist";
import { displaySongsTitle } from "./elements/songs";
import "../src/elements/artist-list";
import "../src/elements/song-list";
import * as apiCall from "./api";

//Appeler pour récupérer les artistes et les covers
displayCovers(await apiCall.getArtits());

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

//Barre de navigation

//Permet de rajouter le hash #home si la window n'a pas de hash de base
function getHash(){
  let hash = window.location.hash
  if(!hash){
    history.replaceState("","","#home")
  }
  const hashSplited = hash.split("-")
  return hashSplited
}


//Enlever toutes les sections actives, sauf page d'accueil
const sections = document.querySelectorAll("main section")
sections.forEach(section =>{
  section.classList.remove("active")
})
const homePage = document.querySelector("#home-section")
homePage.classList.add("active")

//Récupérer les hash
window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  //console.log(hash);

  const activeSection = document.querySelector(`${hash}-section`); //récupérer le hash
  switch (hash) {
    case "#home":
      activeSection.classList.add("active");
      window.location.hash = hash;
      break;
    case "#player":
      activeSection.classList.add("active");
      window.location.hash = hash;

      break;
    case "#artists":
      //qqch
      break;
    case "#favorites":
      activeSection.classList.add("active");
      window.location.hash = hash;

      break;
  }
});

getHash()