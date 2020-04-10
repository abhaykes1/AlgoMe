import React, {useEffect} from 'react';
import M from 'materialize-css'
import Output from './Output';
import './css/Tab.css'
import { Colors } from '../constants/colors';
import CustomOutput from './CustomOutput';

export default function Tab() {
    //   useEffect(() => {
    // //   var elements = document.querySelectorAll('.tabs');
    // //         M.Collapsible.init(elements,{
                
    // //         });
        
    //     }, []);
    useEffect(() => {
        M.AutoInit();
    }, [])
  return (
    <div className="row  tabRootContainer ">
    <div className="col  s12 ">
      <ul className="tabs  tabHead z-depth-3">
        <li className="tab col s6 "><a style={{color:Colors.primary}} className="active" href="#test1">Test 1</a></li>
        <li className="tab col s6"><a style={{color:Colors.primary}} href="#test2">Test 2</a></li>
      </ul>
    </div>
    <div id="test1" className="col s12"><Output /></div>    
    <div id="test2" className="col s12"><CustomOutput /></div>
  </div>
  );
}
