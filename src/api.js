const url = "https://webmob-ui-22-spotlified.herokuapp.com/api/"

async function getArtits(){
    const response = await fetch(`${url}artists`)
    const artistsList = await response.json()
    return artistsList;

}

export {getArtits}

