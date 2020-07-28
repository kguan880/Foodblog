import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export function resultsPage(props) {

    console.log(props.match.params)
    console.log(props)

    const results = props.recipes
    const result = results.find(result => result.name === props.match.params.name)

    return (

        <div>

            {(result) &&
                <>
                    <div>
                        
                            <ul>
                                <img src={result.image} />
                                <div>
                                    <Link to={`/recipe/${result.title}`}>{result.title}</Link>
                                </div>
                            </ul>
                        
                    </div>
                </>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(resultsPage)