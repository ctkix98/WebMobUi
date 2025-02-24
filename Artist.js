class Artist{
id;
name;
cover;

    constructor(){

    }

    displayCovers(arrayArtists){
        const artistsSection = document.querySelector(".artist-list");
        artistsSection.innerHTML = "";
      
        arrayArtists.forEach((artist) => {
          const artistCover = document.createElement("artist-cover");
          artistCover.setAttribute("cover", artist.image_url);
          artistCover.setAttribute("name", artist.name);
      
          artistsSection.appendChild(artistCover);
        });


    }
}
export default Artist;