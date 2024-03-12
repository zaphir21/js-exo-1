

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
        const statsDev = document.createElement("div")
        statsDev.className = "stats"

        Object.keys(pokemon.stats).map((key) => {
            const stat = document.createElement("p")
            stat.textContent = `${key.toUpperCase()}: ${pokemon.stats[key]}`
            statsDev.appendChild(stat)

        })
        const typeDiv = document.createElement("div")
        typeDiv.className = "type"
        pokemon.apiTypes.map(type => {
            const typeP = document.createElement("p")
            typeP.textContent = type.name
            const typeImg = document.createElement("img")
            typeImg.src = type.image
            typeImg.width = 50
            typeImg.height = 50
            typeDiv.appendChild(typeP)
            typeDiv.appendChild(typeImg)
        })
        pokemonDiv.appendChild(typeDiv)
        pokemonDiv.appendChild(image)
        pokemonDiv.appendChild(para)
        pokemonDiv.appendChild(statsDev)

        divRootNode.appendChild(pokemonDiv)
    })
})
.catch((error) => {
    console.log(error)
})