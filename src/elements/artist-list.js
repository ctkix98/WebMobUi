export class ArtistCover extends HTMLElement {
    static observedAttributes = ["cover", "name", "id"];
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
      <a href="${this.getAttribute('href')}">
      <img src="${this.getAttribute("cover")}" />
      <div class="artist-list-item-title">${this.getAttribute("name")}</div>
    `;
    }
  }
  customElements.define("artist-cover", ArtistCover);