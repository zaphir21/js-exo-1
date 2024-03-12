

const url = "https://pokebuildapi.fr/api/v1/pokemon/limit/100"
const divRootNode = document.querySelector(".root")

fetch(url)
.then(async (response) => {
    const pokelist = await response.json()
    pokelist.map((pokemon) => {
        console.log(pokemon)
        const pokemonDiv = document.createElement("div");
        pokemonDiv.className = "pokemon"
        const para = document.createElement("p");
        para.textContent = pokemon.name
        const image = document.createElement("img")
        image.src = pokemon.image
        image.width = 100
        image.height = 100
        pokemonDiv.appendChild(image)
        pokemonDiv.appendChild(para)
        divRootNode.appendChild(pokemonDiv)
    })
})
.catch((error) => {
    console.log(error)
})