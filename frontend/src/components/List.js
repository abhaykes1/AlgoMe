import React,{useEffect, useState, useCallback} from 'react';
import M from 'materialize-css'
import './css/List.css'
import { Colors } from '../constants/colors';
import ListButton from './ListButton';
import {selectedProgram} from '../redux'
import {useDispatch} from 'react-redux'
function List() {

  const [checkedArray, setCheckedArray] = useState(false);
  const [checkedRootedTree, setCheckedRootedTree] = useState(false);
  const [checkedBinaryTree, setCheckedBinaryTree] = useState(false);
  const [checkedSegmentTree, setCheckedSegmentTree] = useState(false);
  const [checkedGraph, setCheckedGraph] = useState(false);
  const dispatch = useDispatch();
  const handleChangeArray = () => {
    setCheckedArray((prev) => !prev);
    setCheckedRootedTree(false);
    setCheckedBinaryTree(false);
    setCheckedSegmentTree(false);
    setCheckedGraph(false);
  };
  const handleChangeRootedTree = () => {
    setCheckedRootedTree((prev) => !prev);
    setCheckedArray(false);
    setCheckedBinaryTree(false);
    setCheckedSegmentTree(false);
    setCheckedGraph(false);
  };
  const handleChangeBinaryTree = () => {
    setCheckedBinaryTree((prev) => !prev);
    setCheckedRootedTree(false);
    setCheckedArray(false);
    setCheckedSegmentTree(false);
    setCheckedGraph(false);
  };
  const handleChangeSegmentTree = () => {
    setCheckedSegmentTree((prev) => !prev);
    setCheckedRootedTree(false);
    setCheckedBinaryTree(false);
    setCheckedArray(false);
    setCheckedGraph(false);
  };
  const handleChangeGraph = () => {
    setCheckedGraph((prev) => !prev);
    setCheckedRootedTree(false);
    setCheckedBinaryTree(false);
    setCheckedSegmentTree(false);
    setCheckedArray(false);
  };
  useEffect(() => {
      var elements = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elements,{
        accordion: true
      });
  }, []);
  const onClickHandler = useCallback((id) => {
    dispatch(selectedProgram(id))
  },[dispatch])
  return (
    <div className="rootListContainer" >
      <div className='listContainer'  >
        <ul className="collapsible " >
            <li>
              <div style={{backgroundColor:Colors.primary}} className="collapsible-header" onClick={handleChangeArray}><i className="material-icons">panorama_fish_eye</i>Array</div>
              <div className="collapsible-body" >
                <ListButton in={checkedArray} timeout={1000} title="Sum" click={()=>onClickHandler('sum')} />
                <ListButton in={checkedArray} timeout={1100} title="Maximum" click={()=>onClickHandler('max')}/>
                <ListButton in={checkedArray} timeout={1200} title="passed" />
                <ListButton in={checkedArray} timeout={1300} title="passed" />
                <ListButton in={checkedArray} timeout={1400} title="passed" />
                <ListButton in={checkedArray} timeout={1500} title="passed" />                 
              </div>
            </li>
            <li>
              <div style={{backgroundColor:Colors.primary}} className="collapsible-header" onClick={handleChangeRootedTree}><i className="material-icons">panorama_fish_eye</i>Rooted Tree</div>
              <div className="collapsible-body" >
                <ListButton in={checkedRootedTree} timeout={1000} title="passed" />              
              </div>
            </li>
            <li>
              <div style={{backgroundColor:Colors.primary}} className="collapsible-header" onClick={handleChangeBinaryTree}><i className="material-icons">panorama_fish_eye</i>Binary Tree</div>
              <div className="collapsible-body" >
                <ListButton in={checkedBinaryTree} timeout={1000} title="passed" />                
              </div>
            </li>
            <li>
              <div style={{backgroundColor:Colors.primary}} className="collapsible-header" onClick={handleChangeSegmentTree}><i className="material-icons">panorama_fish_eye</i>Segment Tree</div>
              <div className="collapsible-body" >
                <ListButton in={checkedSegmentTree} timeout={1000} title="passed" />               
              </div>
            </li>
            <li>
              <div style={{backgroundColor:Colors.primary}} className="collapsible-header" onClick={handleChangeGraph}><i className="material-icons">panorama_fish_eye</i>Graph</div>
              <div className="collapsible-body" >
                <ListButton in={checkedGraph} timeout={1000} title="passed" />                
              </div>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
