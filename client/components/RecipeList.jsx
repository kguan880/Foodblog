import React from 'react'

import { Link } from 'react-router-dom'

function RecipeList(props) {
  return (
    <>
      <h1>Recipes</h1>
      <div className="recipe-list">
        <ul>
          {props.recipes.map(recipe =>
            <li key=
              {recipe.id}>
              <Link to={{
                pathname: `/recipe/${recipe.id}`,
                state: { id: `${recipe.id}` }
              }}>
                <div className="list-item box">
                < img src={recipe.image} />{recipe.title}
                </div>
              </Link></li>

          )}
        </ul>
      </div>
    </>
  )
}

export default RecipeList