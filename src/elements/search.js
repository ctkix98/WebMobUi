const search = document.querySelector(".icon-button");
const inputSearch = document.querySelector("#search-input");

export function addToggle() {
  search.addEventListener("click", () => {
    inputSearch.classList.toggle("active");
    //console.log("c'est cliqué dans le search")
    inputSearch.focus();
  });
}

inputSearch.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
    const value = inputSearch.value;
    window.location = `#search-${value}`
    inputSearch.value = "";

}
});

