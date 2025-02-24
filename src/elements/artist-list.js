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
      <a href="#">
      <img src="${this.getAttribute("cover")}" />
      <div class="artist-list-item-title">${this.getAttribute("name")}</div>
    `;
    }
  }
  customElements.define("artist-cover", ArtistCover);