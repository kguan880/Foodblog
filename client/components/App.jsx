import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from "./Nav"
import Landing from "./Landing"
import About from './About'
import RecipeSearch from './RecipeSearch'
// import Result from './Result'
import Results from './Results'

export class App extends React.Component {
    render() {
        return <>
            <BrowserRouter>
                <Nav />
                <Landing />
                <About />
                <RecipeSearch />
                <Route exact path="/recipe" component={Results} />
            </BrowserRouter>

            {/* <Route exact path="/results:id" component={Result} /> */}
        </>
    }
}

export default connect()(App)
