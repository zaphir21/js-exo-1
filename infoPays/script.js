const divList = document.querySelector(".list")
const searchbar = document.querySelector("#searchBar")

searchbar.addEventListener("input", (e)=>{
    
    const recherche = searchbar.value.trim() 
    const url = `https://api.thecompaniesapi.com/v1/locations/countries?search=${recherche}`
    fetch(url)
    .then(async recherche => {
        const listePays = await recherche.json()
        // console.log(listePays)
        divList.innerHTML = ""
        listePays.countries.map(pays => {
            console.log(pays)
            const divPays = document.createElement("div")
            divPays.className = "pays"
            const namePays = document.createElement("p")
            namePays.textContent = pays.name
            const popPays = document.createElement("p")
            popPays.textContent = "Population pays: " + pays.population
            const continentPays = document.createElement("p")
            continentPays.textContent = "Continent: " + pays.continent.name
            divPays.appendChild(namePays)
            divPays.appendChild(popPays)
            divPays.appendChild(continentPays)
            divList.appendChild(divPays)
        })
    })
})