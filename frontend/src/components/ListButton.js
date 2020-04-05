import React,{useEffect} from 'react';
import {Zoom} from '@material-ui/core';
import M from 'materialize-css'
import { Colors } from '../constants/colors';

export default function ListButton(props) {
    useEffect(() => {
        M.AutoInit()
    }, []);
  return (
    <Zoom in={props.in} timeout={props.timeout} >
        <div>
            <button onClick={props.click} style={{width:'70%', color: 'white', backgroundColor: Colors.accent2, margin:1  }} className="waves-effect waves-light btn">{props.title}</button>
        </div>
    </Zoom>

  );
}
