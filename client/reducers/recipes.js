// local imports

// define initial state
const initialState = []

// define reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RECIPES':
            return action.recipes
        case 'SET_RECIPE':
            return action.recipe
        default:
            return state
    }
}

// export reducer
export default reducer