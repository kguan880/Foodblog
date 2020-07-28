const axios = require("axios");

export function getRecipes(ingredient1, ingredient2, ingredient3) {
    return axios({
        "method": "GET",
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "dd639138d2msh7a069a626bcaadap126e74jsn860ce0ccd443",
            "useQueryString": true
        }, "params": {
            "number": "5",
            "ranking": "1",
            "ignorePantry": "false",
            "ingredients": `${ingredient1}%2C${ingredient2}%2C${ingredient3}`
        }
    })
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}
