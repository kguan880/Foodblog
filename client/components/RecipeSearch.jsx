import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from "react-redux"
import { fetchRecipes } from '../actions/recipeAction'

class RecipeSearch extends React.Component {

    state = {
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { ingredient1, ingredient2, ingredient3 } = this.state
        this.props.dispatch(fetchRecipes(ingredient1, ingredient2, ingredient3))

        this.setState({
            ingredient1: "",
            ingredient2: "",
            ingredient3: "",
        })
    }

    render() {
        return (
            <>
                <div className="form">
                    <h1>What's in your fridge?</h1>
                    <p>Enter a few ingredients below and see what you can make!</p>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="ingredient1" value={this.state.ingredient1} required onChange={this.handleChange} />
                        <input type="text" name="ingredient2" value={this.state.ingredient2} required onChange={this.handleChange} />
                        <input type="text" name="ingredient3" value={this.state.ingredient3} required onChange={this.handleChange} />
                        <Link to='/results'><input type="submit" value="Generate" /></Link>
                    </form>
                </div>

            </>
        )
    }
}

export default connect()(RecipeSearch)