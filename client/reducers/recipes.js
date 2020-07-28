// local imports

// define initial state
const initialState = []

// define reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RECIPES':
            return action.recipes
        default:
            return state
    }
}

// export reducer
export default reducer