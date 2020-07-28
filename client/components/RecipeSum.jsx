import React from 'react'
import { connect } from 'react-redux'
import { getSummary } from '../apis/recipeSearch'


class RecipeSum extends React.Component {

    state = {
        recipe: {}
    }


    componentDidMount() {
        getSummary(this.props.location.state.id).then(response => {
            return (
                this.setState({
                    recipe: response
                })
            )
        })
    }

    render() {
        const recipe = this.state.recipe
        return (
            <>
                <div className="summary-parent">
                    <h1>{recipe.title}</h1>
                    <div className="summary box">
                        <img src={recipe.image} />
                        <p>{recipe.instructions}</p>
                    </div>
                    <div className="ingredients">
                        <ol>
                            {this.state.recipe.extendedIngredients && this.state.recipe.extendedIngredients.map(ingredient =>
                                <li key={ingredient.id}>) {ingredient.name} - {ingredient.amount} {ingredient.unit}</li>
                            )}
                        </ol>
                    </div>

                </div>
            </>
        )
    }
}

export default connect()(RecipeSum)