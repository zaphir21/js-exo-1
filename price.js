const  buttonNode = document.querySelector("button") 

const price = [
    "jambon de bayonne",
    "une poule empaillé", 
    "une photo de Jaques Chirac", 
    "rien"
]

let isClicked = false

buttonNode.addEventListener('click', () => {
    const priceCointainerNode = document.querySelector(".price-cointainer")
    if(isClicked) return window.alert("Vous n'avez pas le droit de cliquer plus d'une fois")
    priceCointainerNode.textContent = "";
    isClicked = true
    buttonNode.disabled = true
    const priceRdm = price[Math.floor(Math.random() * price.length)]
    const priceText = document.createTextNode(`Vous avez gagné : ${priceRdm}`)
        priceCointainerNode.appendChild(priceText)
    window.alert("Vous n'avez pas le droit de cliquer plus d'une fois")
})