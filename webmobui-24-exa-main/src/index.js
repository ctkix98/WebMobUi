import { displaySection, activateLink } from "./helpers.js";
import * as apiCall from "./api";
import "../src/sections/annonce-item.js";
import "../src/sections/categorie-item.js";
import "../src/sections/annonce-individuelle-item.js"
import {displayAnnonces } from "../src/elements/annonces.js";
import { displayCategories } from "./elements/categories.js";
import { displayAnnonce } from "./elements/annonce.js";
import { getItems } from "./lib/local-storage.js";

console.log(await apiCall.getAnnonce());

console.log(await apiCall.getCategories());

console.log(await apiCall.getACategorie(1))

console.log (await apiCall.getAAnnonce(1))

//Appel du service worker
//navigator.serviceWorker.register('/worker.js')

const routeur = async () => {
  const hash = window.location.hash || "#home";
  const hashs = hash.split("-");

  // Colorie le lien
  activateLink(hashs[0]);

  switch (hashs[0]) {
    case "#annonces":
      if(hashs[1]){
        console.log(hashs)
        displayAnnonce(await apiCall.getAAnnonce(hashs[1]))
        displaySection("annonce-details")
        
      }

    break;

    case "#latest":
      displayAnnonces(await apiCall.getAnnonce());
      displaySection("annonces");

      break;

    case "#categories":
      if (hashs[1]) {
        //console.log(hashs[1])
        const titreSection = document.querySelector("#section-annonces h4");
        const allCategories = await apiCall.getCategories()
        displayAnnonces(await apiCall.getACategorie(hashs[1]));
        displaySection("annonces");
        const currentCat = allCategories.find((cat) =>cat.id ===parseInt(hashs[1]))
        titreSection.textContent = `Catégorie > ${currentCat.name}`;
      } else {
        displayCategories(await apiCall.getCategories());

        displaySection("categories");
      }
      break;

    case "#starred":
      let favoritesAnnonces = getItems()
      displayAnnonces(favoritesAnnonces)
      displaySection("annonces");
      let titreFavoris = document.querySelector("#section-annonces h4")
      titreFavoris.textContent = `Intéressantes (${favoritesAnnonces.length})`
      
      //checker si on clique sur l'étoile
      const annonceFavorite = document.querySelectorAll("annonce-item")
      annonceFavorite.forEach((annonce)=> {
        annonce.addEventListener("favorite", (e) =>{
          e.target.remove()
          //Permet de mettre à jour le nombre d'articles dans intéressantes
          favoritesAnnonces = getItems()
          titreFavoris.textContent = `Intéressantes (${favoritesAnnonces.length})`
        })
      })
      break;

    case "#account":
      displaySection("account");
      break;
  }
};

// On veut être averti des changements
window.addEventListener("hashchange", routeur);

// on exécute une première fois au chargement de la page pour afficher la bonne section
routeur();
