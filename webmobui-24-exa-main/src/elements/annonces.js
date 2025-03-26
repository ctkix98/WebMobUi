import { setItem, getItem, getItems,removeItem } from "../lib/local-storage";



export function displayAnnonces(arrayAnnonces) {
    let annonceSection = document.querySelector(".annonces");
    annonceSection.innerHTML = ""; 

    let titrePage = document.querySelector("#section-annonces h4")
    let compteur = 0;

  arrayAnnonces.forEach((annonce) => {
    const annoncePart = document.createElement("annonce-item");
    annoncePart.setAttribute("title", annonce.title);
    annoncePart.setAttribute("price", annonce.price);
    annoncePart.setAttribute("image_url", annonce.image_url);
    annoncePart.setAttribute("href", `annonces-${annonce.id}`)
    if (getItem(annonce.id)) {
        annoncePart.setAttribute("favorite", true);
      } else {
        annoncePart.setAttribute("favorite", false);
      }
  

    annonceSection.append(annoncePart)
    compteur +=1;

    annoncePart.addEventListener("favorite", (e) => {
        if (getItem(annonce.id)) {
          annoncePart.setAttribute("favorite", false);
          removeItem(annonce.id);
        } else {
          annoncePart.setAttribute("favorite", true);
          setItem(annonce.id, annonce);
        }
  
        //console.log("Je suis dans annonce.js")
        //localStorage.setItem("monChat", "Tom");
      });

    
  });

  titrePage.textContent = `Dernières annonces (${compteur})`
}
