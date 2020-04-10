import React from 'react';
import NavBar from './components/NavBar';
import List from './components/List';
import './App.css'
import Tab from './components/Tab';
export default function Wrapper(props) {
  return (
      <div className="App">
          <NavBar />
          <div className="rootContainer">
            <Tab />
            <List />
          </div>

          
      </div>
  );
}
