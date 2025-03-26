export function displayCategories(arrayCategories) {
    let annonceSection = document.querySelector(".categories");
    annonceSection.innerHTML = ""; 

    let titrePage = document.querySelector("#section-categories h4")
    titrePage.textContent = "Catégories"

  arrayCategories.forEach((categorie) => {
    const categoriePart = document.createElement("categorie-item");
    categoriePart.setAttribute("name", categorie.name);
    categoriePart.setAttribute("count", categorie.count);
    categoriePart.setAttribute("icon_url", categorie.icon_url);
    categoriePart.setAttribute("href", `#categories-${categorie.id}`)

    annonceSection.append(categoriePart)
  });

}