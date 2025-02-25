import { displayCovers } from "./elements/Artist";
import "../src/elements/artist-list"
import * as apiCall from "./api"

displayCovers(await apiCall.getArtits())

