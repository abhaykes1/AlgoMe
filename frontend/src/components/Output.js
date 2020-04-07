import React,{useState} from 'react';
import './css/Output.css'
import TextField from '@material-ui/core/TextField';
import { Colors } from '../constants/colors';
import Constraints from './Constraints';
import {useSelector, useDispatch} from 'react-redux'
import { INPUT } from '../assets/data/dummy-data';
import NotSelected from './NotSelected';
import { setOutput } from '../redux/output/outputActions';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles } from '@material-ui/core/styles';

const ColorCircularProgress = withStyles({
  root: {
    color: '#f2f2f2',
    margin:'10px'
  },
})(CircularProgress);

function Output(props) {

  const [input, setInput] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInput(e.target.value);
  }
  const selectedProgramId = useSelector((state) => state.program.selectedProgram);
  const receivedOutput = useSelector((state) => state.output.output);

  let selectedProgramConstraints;

  if(selectedProgramId){
    selectedProgramConstraints = INPUT.find((program) => program.id === selectedProgramId );
  }
  const clickHandler = async () => {
    setIsClicked(true);
    if(!selectedProgramId){
      setAlertMessage('Please select a program');
    }else{
      if(input.trim()==='')
      {
        setAlertMessage('Please enter correct input');
      }else{
        setIsLoading(true);
        await dispatch(setOutput(input));
        setIsLoading(false)
      }
    }
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
        {
          (isLoading)
          ?<ColorCircularProgress 
            size={25}
           />
          :  <button 
                  style={{
                    width:'60%', 
                    color: 'white', 
                    backgroundColor: Colors.secondary2, 
                    margin:5  
                  }} 
                  className=" waves-light btn"
                  onClick={clickHandler}
                >
                Calculate!
              </button>
        }
        {
          (receivedOutput)
          ?(
            <div className="outputContainer" >
              <h6 style={{color:Colors.primary}} >Output</h6>
              <p style={{color:Colors.primary}}>{receivedOutput}</p>
            </div>
          )
          :null
        }
        {
          (selectedProgramId)
          ?<Constraints program={selectedProgramConstraints} />
          :<NotSelected />
        }
        {
          (!selectedProgramId && isClicked)
          ?<Alert severity="info" onClose={() => {setIsClicked(false)}}> {alertMessage} </Alert>
          :null
        }          
      </div>
  );
}
export default Output;
