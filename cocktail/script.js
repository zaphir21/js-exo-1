const divRootNode = document.querySelector("#root")
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
fetch(url)
.then(async response => {
    const reponse = await response.json()
    reponse.drinks.map(cocktail => {
        const divCocktail = document.createElement("div")
        divCocktail.className = "cocktail"
        const nameCocktail = document.createElement("h1")
        nameCocktail.textContent = cocktail.strDrink
        const imgCocktail = document.createElement("img")
        imgCocktail.src = cocktail.strDrinkThumb

        const ingredientsTab = []
        for(let i=1; i <= 15; i++){
            if(cocktail[`strIngredient${i}`] !== null){
            ingredientsTab.push(cocktail[`strIngredient${i}`])}
        }
        const listeIngredients = document.createElement("ul")
        listeIngredients.className = "cocktail-ingredients"
        ingredientsTab.map(ingredient => {
            const ingredientLi = document.createElement("li")
            ingredientLi.textContent = ingredient
            listeIngredients.appendChild(ingredientLi)
        })
      const instructions = document.createElement("p");
      instructions.className = "instructions";
      instructions.textContent = cocktail.strInstructions;
      instructions.style.display = "none "

      divCocktail.addEventListener("click", () => {
        if (instructions.style.display === "none") {
          instructions.style.display = "block";
          listeIngredients.style.display = "none";
        } else {
          instructions.style.display = "none";
          listeIngredients.style.display = "block";
        }
      });
        divCocktail.appendChild(nameCocktail)
        divCocktail.appendChild(imgCocktail)
        divCocktail.appendChild(listeIngredients)
        divCocktail.appendChild(instructions)
        divRootNode.appendChild(divCocktail)
        
    })
})

