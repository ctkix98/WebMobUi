export class SongList extends HTMLElement {
  static observedAttributes = ["favorite"];
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const icon =
      this.getAttribute("favorite") == "true" ? "favorite" : "favorite_border";

    // On agglomère le HTML
    this.innerHTML = `<a href="#">
          <div class="list-item-title">${this.getAttribute("title")}</div>
          <div class="list-item-actions">
            <button type="button" class="icon-button favorite-button ">
              <span class="material-icons">${icon}</span>
            </button>
            <button type="button" class="icon-button play-button">
              <span class="material-icons">play_arrow</span>
            </button>
          </div>
        </a>`;
  }
}
customElements.define("song-list", SongList); 
//il faudra vider quand on fera l'appel de la liste des chanson, directement dans la classe Song

