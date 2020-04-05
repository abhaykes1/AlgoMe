import {combineReducers} from 'redux'
import programReducer from './program/programReducer'

const rootReducer = combineReducers({
    program: programReducer
})

export default rootReducer;