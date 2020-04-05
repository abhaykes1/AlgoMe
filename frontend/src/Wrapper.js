import React from 'react';
import NavBar from './components/NavBar';
import Output from './components/Output';
import List from './components/List';
import './App.css'
export default function Wrapper(props) {
  return (
      <div className="App">
          <NavBar />
          <div className="rootContainer">
            <Output />
            <List />
          </div>
      </div>
  );
}
