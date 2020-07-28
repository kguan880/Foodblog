import React from 'react'
import { BrowerRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from "./Nav"
import Landing from "./Landing"
import About from './About'
import RecipeSearch from './RecipeSeach'


export class App extends React.Component {
    render() {
        return <>
            <Nav />
            <Landing />
            <About />
            <RecipeSearch />
        </>
    }
}

export default connect()(App)
