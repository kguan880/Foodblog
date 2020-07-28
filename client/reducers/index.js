// import external modules
import { combineReducers } from 'redux'

// local imports
import recipes from './recipes'

// combine reducers to single reducer
const reducer = combineReducers({
  // add reducers here, remove teplateStore when nolonger needed
  recipes
})

// export single reducer
export default reducer