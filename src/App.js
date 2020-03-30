import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {useSelector,useDispatch} from 'react-redux';

 function App() {
   const counter= useSelector(state =>state.counter);
   const dispatch=useDispatch();

  
 
       
  return (
    <div className="App">
     <h1>counter:{counter}</h1>
     <button onClick={ ()=>dispatch({type:"INCREMENT"})    }>INCREMENT</button>
     <button onClick={  () =>dispatch({type:"DECREMENT"}) }>DECREMENT</button>
    
    </div>
  );
}



export default App;
