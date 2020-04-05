import React from 'react';
import algome from '../assets/algome.png'
import { Colors } from '../constants/colors';
export default function NavBar() {
  return (
    <nav>
        <div className="nav-wrapper" style={{backgroundColor:Colors.primary, height:'80px'}}>
            <div style={{ height: 'maxContent', paddingLeft: '10px'}}>
                <img height='72' alt="logo" src={algome} />
            </div>
        </div>
    </nav>
  );
}
