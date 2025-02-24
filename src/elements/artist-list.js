export class ArtistCover extends HTMLElement {
    static observedAttributes = ["cover", "name"];
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
      <img src="${this.getAttribute("cover")}" />
      <div>${this.getAttribute("name")}</div>
    `;
    }
  }
  customElements.define("artist-cover", ArtistCover);