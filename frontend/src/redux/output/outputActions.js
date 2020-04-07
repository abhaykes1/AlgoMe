import { SET_OUTPUT } from "./outputTypes"
export const setOutput = (inputData) => {
    return async (dispatch, getState) => {
        const selectedProgram = getState().program.selectedProgram;
        const response = await fetch(
            `https://hidden-caverns-44142.herokuapp.com`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                input: inputData,
                program: selectedProgram
              })
            }
          );
          const resData = await response.json();
          if(!response.ok){
            throw new Error('Something went wrong!');
          }
          dispatch({
            type: SET_OUTPUT,
            data: {
                input: resData.input,
                output: resData.output
            }
          })
    }
};