import { SELECTED_PROGRAM } from "./programTypes";

const initialState = {
    selectedProgram: ''
}

const programReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_PROGRAM:
            return{
                ...state,
                selectedProgram: action.program
            }
    
        default:
            return state;
    }
}

export default programReducer;