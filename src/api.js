const url = "https://webmob-ui-22-spotlified.herokuapp.com/api/"

async function getArtits(){
    const response = await fetch(`${url}artists`)
    const artistsList = await response.json()
    return artistsList;

}

async function getSongs(id){
    const response = await fetch(`${url}artists/${id}/songs`)
    const songsList = await response.json()
    return songsList;
}
export {getArtits, getSongs}

