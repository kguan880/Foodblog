import React, { createFactory } from 'react'
import { connect } from 'react-redux'
import { getSummary } from '../apis/recipeSearch'


class RecipeSum extends React.Component{

    state = {
        recipe: {}
    }

    componentDidMount(){
        getSummary(this.props.location.state.id).then(response => {
            return (
            this.setState({
                recipe: response
            }))
        })
    }

    render(){
        return (
            <>
            <div className="container">
                <h1>{this.state.recipe.title}</h1>
                <img src={this.state.recipe.image}/>
            </div>
            </>
        )
    }
}

export default connect()(RecipeSum)