const search = document.querySelector("#search")

let timeoutId;
search.addEventListener("input", () => {
    let recherche = search.value.trim();
    clearTimeout(timeoutId);
    if(recherche === ""){ 
        recherche = "Detective Conan"}
const url = `https://api.jikan.moe/v4/anime?q=${recherche}`
const divRootNode = document.querySelector(".root")
timeoutId = setTimeout(async () => {
    const url = `https://api.jikan.moe/v4/anime?q=${recherche}`;

        const response = await fetch(url);
        const animeList = await response.json();

        if (animeList.data) {
            // Effacez le contenu précédent avant d'ajouter de nouveaux éléments
            divRootNode.innerHTML = "";

            animeList.data.forEach((anime) => {
                const animeDiv = document.createElement("div");
                animeDiv.className = "anime";
                const para = document.createElement("p");
                para.textContent = anime.title;
                const image = document.createElement("img");
                image.src = anime.images.jpg.large_image_url;
                animeDiv.appendChild(image);
                animeDiv.appendChild(para);
                divRootNode.appendChild(animeDiv);
            });
        } else {
            console.error("La structure de la réponse JSON est inattendue.");
        }
}, 500);
})