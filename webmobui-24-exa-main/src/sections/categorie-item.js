export class CategoriesListe extends HTMLElement {
  static observedAttributes = ["favorite"];
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    // const image =
    //   this.getAttribute("favorite") == "true" ? "favorite" : "favorite_border";

    // On agglomère le HTML
    this.innerHTML = `

        <a href="${this.getAttribute('href')}">
            <img src="${this.getAttribute(
              "icon_url"
            )}"  class="categories__box__icon" />
             <div class="categories__box__name">${this.getAttribute(
               "name"
             )}</div>

            <div class="categories__box__count">${this.getAttribute(
              "count"
            )} éléments</div>
          </a>
      `;
  }
}
customElements.define("categorie-item", CategoriesListe);
