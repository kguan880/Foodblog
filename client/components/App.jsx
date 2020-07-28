import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from "./Nav"
import Landing from "./Landing"
import About from './About'
import RecipeSearch from './RecipeSearch'
import RecipeSum from './RecipeSum'
import Footer from './Footer'
// import Result from './Result'

export class App extends React.Component {
    render() {
        return <>
            <BrowserRouter>
                <Route path="/" component={Nav} />
                <Route exact path="/" component={Landing} />
                <Route exact path="/" component={About} />
                <Route exact path="/" component={RecipeSearch} />
                <Route exact path="/recipe/:id" component={RecipeSum} />
                <Route path="/" component={Footer} />
            </BrowserRouter>

        </>
    }
}

export default connect()(App)
