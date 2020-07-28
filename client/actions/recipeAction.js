import { getRecipes } from '../apis/recipeSearch'

export function setRecipe(recipes) {
    return {
        type: 'SET_RECIPES',
        recipes,
    }
}

export function fetchRecipes(ingredient1, ingredient2, ingredient3){
    return (dispatch) =>{
        getRecipes(ingredient1, ingredient2, ingredient3)
            .then((recipes) =>{
                dispatch(setRecipe(recipes))
            })
    }
}