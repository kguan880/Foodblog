import React from 'react'

import { Link } from 'react-router-dom'

function RecipeList(props) {
  return (
    <div className="recipe-list">
      <h1>Recipes</h1>
      <ul>
        {props.recipes.map(recipe => 
        <li key={recipe.id}>
              <Link to={{
                pathname:`/recipe/${recipe.id}`,
                state: { id: `${recipe.id}`}
              }}>< img src={recipe.image} /></Link></li> 
              
        )}
      </ul>
    </div>
  )
}

export default RecipeList