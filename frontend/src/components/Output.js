import React,{useState} from 'react';
import './css/Output.css'
import TextField from '@material-ui/core/TextField';
import { Colors } from '../constants/colors';
import Constraints from './Constraints';
import {useSelector} from 'react-redux'
import { INPUT } from '../assets/data/dummy-data';
import NotSelected from './NotSelected';
function Output(props) {

  const [input, setInput] = useState('');
  const inputHandler = (e) => {
    setInput(e.target.value);
    console.log(input)
  }
  const selectedProgramId = useSelector((state) => state.program.selectedProgram);
  let selectedProgramConstraints;
  if(selectedProgramId){

    selectedProgramConstraints = INPUT.find((program) => program.id === selectedProgramId );
  }
  return (
      <div className="rootOutputContainer">
        <div className="inputContainer">
          <TextField
            placeholder="paste your input here"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            value={input}
            multiline
            rowsMax="5"
          />
        </div>
        <button 
            style={{
              width:'60%', 
              color: 'white', 
              backgroundColor: Colors.secondary2, 
              margin:5  
            }} 
            className="waves-effect waves-light btn"
          >
            Calculate!
          </button>
          {
            (selectedProgramId)
            ?<Constraints program={selectedProgramConstraints} />
            :<NotSelected />
          }
          
      </div>
  );
}
export default Output;
