export function displayAnnonce(annoncePicked) {
    let annonceSection = document.querySelector("#section-annonce-details");
    annonceSection.innerHTML = ""; 


    let titrePage = document.createElement("h2")
    titrePage.textContent = `Annonces > ${annoncePicked.title}`

    const annonce = document.createElement("annonce-individuelle-item")
    annonce.setAttribute("title", annoncePicked.title);
    annonce.setAttribute("price", annoncePicked.price);
    annonce.setAttribute("image_url", annoncePicked.image_url);
    annonce.setAttribute("description", annoncePicked.description);

    annonceSection.append(titrePage, annonce)

}