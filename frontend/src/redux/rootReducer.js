import {combineReducers} from 'redux'
import programReducer from './program/programReducer'
import outputReducer from './output/outputReducer';

const rootReducer = combineReducers({
    program: programReducer,
    output: outputReducer
})

export default rootReducer;