import { SET_OUTPUT } from "./outputTypes";

const initialState = {
    input: '',
    output: ''
}
const outputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OUTPUT:
            return{
                ...state,
                output: action.data.output,
                input: action.data.input
            }
    
        default:
            return state;
    }
}
export default outputReducer;