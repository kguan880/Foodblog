import React from 'react'

export default function RecipeSeach() {
    return (
        <>
            <div className="form">
                <h1>What's in your fridge?</h1>
                <p>Enter a few ingredients below and what you can make!</p>
                <form action="/api/recipe" method="post">
                    <input type="text" name="ingredient1"/>
                    <input type="text" name="ingredient2"/>
                    <input type="text" name="ingredient3"/>
                    <input type="text" name="ingredient4"/>
                    <input type="text" name="ingredient5"/>
                    <input type="submit" value="Generate"/>
                </form>
            </div>

        </>
    )
}
