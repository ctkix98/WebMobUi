class ArtistCover extends HTMLElement {
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

async function getImage() {
  const artists = await fetch(
    "https://webmob-ui-22-spotlified.herokuapp.com/api/artists"
  );
  const data = await artists.json();
  return data;
}

function displayArtist(arrayArtists) {
  const artistsSection = document.querySelector(".artist-list");
  artistsSection.innerHTML = "";

  arrayArtists.forEach((artist) => {
    const artistCover = document.createElement("artist-cover");
    artistCover.setAttribute("cover", artist.image_url);
    artistCover.setAttribute("name", artist.name);

    artistsSection.appendChild(artistCover);
  });
}

displayArtist(await getImage());
