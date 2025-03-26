const addFavorite = new CustomEvent("favorite")

export class AnnonceListe extends HTMLElement {
  static observedAttributes = ["favorite"];
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
     const icon =
    this.getAttribute("favorite") == "true" ? "star" : "star_outlined";

    // On agglomère le HTML
    this.innerHTML = `
      <div>
        <div class="annonces__element__buttons">
          <button type="button" class="icon-button starred-button">
            <span class="material-icons">${icon}</span> 
          </button>
        </div>
        <a href="#${this.getAttribute('href')}">
          <img class="annonces__element__image" src="${this.getAttribute(
            "image_url"
          )}" />
          <div class="annonces__element__title">${this.getAttribute(
            "title"
          )}</div>
          <div class="annonces__element__price">${this.getAttribute(
            "price"
          )}</div>
        </a>
      </div>
    `;
    const favoriteButton = this.querySelector(".starred-button ")
    favoriteButton.addEventListener("click", (e)=> {
      e.preventDefault()
      const current = this.getAttribute("favorite") === "true";
      this.setAttribute("favorite", (!current).toString());
      this.dispatchEvent(addFavorite)
      //console.log(e.target)
      //console.log("J'ai cliqué sur le favoris !")
    })
  }
}
customElements.define("annonce-item", AnnonceListe);
