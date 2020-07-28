import { getRecipes } from '../apis/recipeSearch'

export function getRecipe(recipes) {
    return {
        type: 'GET_RECIPES',
        recipes,
    }
}

export function fetchRecipes(ingredient1, ingredient2, ingredient3){
    return (dispatch) =>{
        getRecipes(ingredient1, ingredient2, ingredient3)
            .then((recipes) =>{
                dispatch(getRecipe(recipes))
            })
    }
}