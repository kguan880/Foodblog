import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from "./Nav"
import Landing from "./Landing"
import About from './About'
import RecipeSearch from './RecipeSearch'
// import Result from './Result'

export class App extends React.Component {
    render() {
        return <>
            <BrowserRouter>
                <Route path="/" component={Nav} />
                <Route exact path="/" component={Landing} />
                <Route exact path="/" component={About} />
                <Route exact path="/" component={RecipeSearch} />
                {/* <Route exact path="/results" component={Results} /> */}
            </BrowserRouter>

            {/* <Route exact path="/results:id" component={Result} /> */}
        </>
    }
}

export default connect()(App)
