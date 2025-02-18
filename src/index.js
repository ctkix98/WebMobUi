console.log("It works !");

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
    console.log(artist)
    const ahref = document.createElement("a");
    ahref.href = "#";

    const image = document.createElement("img");
    image.src = artist.image_url;

    const nameArtist = document.createElement("div");
    nameArtist.classList.add("artist-list-item-title");
    nameArtist.textContent = artist.name;

    ahref.appendChild(image);
    ahref.appendChild(nameArtist);

    artistsSection.appendChild(ahref);

  });
}

displayArtist(await getImage());
