import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from "react-redux"
import { fetchRecipes } from '../actions/recipeAction'
import { getRecipes } from '../apis/recipeSearch'
import RecipeList from './RecipeList'

class RecipeSearch extends React.Component {

    state = {
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        results: [],
        submitted: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { ingredient1, ingredient2, ingredient3 } = this.state
        // const results = this.props.dispatch(fetchRecipes(ingredient1, ingredient2, ingredient3))
        getRecipes(ingredient1, ingredient2, ingredient3).then((res) => {
            return (
                this.setState({
                    ingredient1: "",
                    ingredient2: "",
                    ingredient3: "",
                    results: res,
                    submitted: true
                })
            )
        })
        console.log("generate")

    }

    render() {
        return (
            <>
                <div className="container search-background">
                    <div className="search-page-header box">
                        <h1>What's in your fridge?</h1>
                        <p>Enter a few ingredients below and see what you can make!</p>
                    </div>
                    <div className="form box">
                        <form onSubmit={this.handleSubmit}>
                            <label>Ingredient 1</label>
                            <input type="text" name="ingredient1" value={this.state.ingredient1} required onChange={this.handleChange} />

                            <label>Ingredient 2</label>
                            <input type="text" name="ingredient2" value={this.state.ingredient2} required onChange={this.handleChange} />

                            <label>Ingredient 3</label>
                            <input type="text" name="ingredient3" value={this.state.ingredient3} required onChange={this.handleChange} />

                            <input type="submit" value="Generate" />
                        </form>
                    </div>
                </div>
                {this.state.submitted === true ? <RecipeList recipes={this.state.results} /> : null}
            
            </>
        )
    }
}

export default connect()(RecipeSearch)