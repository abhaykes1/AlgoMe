import { SELECTED_PROGRAM } from "./programTypes"

export const selectedProgram = (progId) => {
    return {
        type: SELECTED_PROGRAM,
        program: progId
    }
}