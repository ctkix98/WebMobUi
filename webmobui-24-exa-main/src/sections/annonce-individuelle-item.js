export class AnnonceIndividuelle extends HTMLElement {
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
        <img src="${this.getAttribute("image_url")}" />
        <div class="annonce-details-section-details" class="active">
          <h4>${this.getAttribute("title")}</h4>
          <h6>${this.getAttribute("price")}</h6>
          <p>${this.getAttribute("description")}</p>
        </div>
      `;
    }
  }
  customElements.define("annonce-individuelle-item", AnnonceIndividuelle);
  