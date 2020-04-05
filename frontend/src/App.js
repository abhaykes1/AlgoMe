import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Wrapper from './Wrapper';
import store from './redux/store';
import {isMobile} from 'react-device-detect';
import { Colors } from './constants/colors';

function App() {
  if(isMobile){
    return(
      <div className="mobile">
        <center>
          <h6 style={{color:Colors.primary}} > This content is unavailable on mobile</h6>
          <p style={{color:Colors.primary}} >Switch to desktop for better experience!</p>
        </center>
      </div>
    )
  }
  return (
    <Provider store={store}>
      <div>
        <Wrapper/>
      </div>
    </Provider>
  );
}

export default App;
