// URL de base du serveur
const BASE_URL = 'https://webmobui-24-exa-backend-0e9cf2cbd0e5.herokuapp.com'

async function getAnnonce(){
    const response = await fetch(`${BASE_URL}/api/annonces`)
    const listeAnnonces = await response.json()
    return listeAnnonces;
}

async function getCategories(){
    const response = await fetch(`${BASE_URL}/api/categories`)
    const listeAnnonces = await response.json()
    return listeAnnonces;
}

async function getACategorie(id){
    const response = await fetch(`${BASE_URL}/api/categories/${id}/annonces`)
    const listeAnnonces = await response.json()
    return listeAnnonces;
}

async function getAAnnonce(id){
    const response = await fetch(`${BASE_URL}/api/annonces/${id}`)
    const listeAnnonces = await response.json()
    return listeAnnonces;
}

export {getAnnonce, getCategories, getACategorie, getAAnnonce}

