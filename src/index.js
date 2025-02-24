import Artist from "../Artist";
import "../src/elements/artist-list"
import * as apiCall from "./api"


const artist1 = new Artist;
artist1.displayCovers(await apiCall.getArtits())

